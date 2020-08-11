const graphql = require('graphql');
const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
} = graphql;
const UserType = require('./userType');
const ItemType = require('./itemType');
const OrderType = require('./orderType');
const Order = mongoose.model('Order');
const { register, login, verifyUser, getCurrentUserId } = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    register: {
      type: UserType,
      args: {
        fname: { type: new GraphQLNonNull(GraphQLString) },
        lname: { type: new GraphQLNonNull(GraphQLString)},
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(_, data) {
        return register(data);
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(_, data) {
        return login(data);
      }
    },
    verifyUser: {
      type: UserType,
      args: {
        token: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(_, data) {
        return verifyUser(data);
      }
    },
    createOrder: {
      type: OrderType,
      args: {
        items: { type: new GraphQLList(GraphQLID) }
      },
      async resolve(_, data, context) {
        const { token } = context;
        const { items } = data;
        
        const id = await getCurrentUserId(token);

        const order = new Order({
          user: id,
          items
        });

        await order.save();

        return {
          id: order.id,
          user: {
            id
          },
          items
        };
      }
    }
  }
});

module.exports = mutation;
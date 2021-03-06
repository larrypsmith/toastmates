const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} = graphql;
const NameType = require('./nameType');
const OrderType = require('./orderType');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: NameType },
    email: { type: GraphQLString },
    orders: {
      type: new GraphQLList(OrderType),
      resolve({ id }) {
        return Order.find({ user: id })
        .populate('user')
        .populate('items');
      }
    },
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean }
  })
});

module.exports = UserType;
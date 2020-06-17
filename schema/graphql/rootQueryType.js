const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} = graphql;
const User = require('../../models/User');
const Order = require('../../models/Order');
const Item = require('../../models/Item');
const UserType = require('./userType');
const OrderType = require('./orderType');

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({})
      }
    },
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, args) {
        return User.findById(args.id);
      }
    },
    orders: {
      type: new GraphQLList(OrderType),
      resolve() {
        return Order.find({})
          .populate('user')
          .populate('items');
      }
    }
  }
});

module.exports = RootQuery;
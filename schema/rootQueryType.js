const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} = graphql;
const User = require('../models/User');
const Order = require('../models/Order');
const Item = require('../models/Item');
const Merchant = require('../models/Merchant');
const Cuisine = require('../models/Cuisine');
const UserType = require('./userType');
const OrderType = require('./orderType');
const MerchantType = require('./merchantType');

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
      resolve(_, args) {
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
    },
    merchants: {
      type: new GraphQLList(MerchantType),
      resolve() {
        return Merchant.find({})
          .populate('cuisine');
      }
    },
    merchantsByCuisine: {
      type: new GraphQLList(MerchantType),
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, { id }) {
        return Merchant.find({ cuisine: id })
          .populate('cuisine');
      }
    }
  }
});

module.exports = RootQuery;
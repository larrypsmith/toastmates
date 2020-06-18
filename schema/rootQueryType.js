const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} = graphql;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Order = mongoose.model('Order');
const Merchant = mongoose.model('Merchant');
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
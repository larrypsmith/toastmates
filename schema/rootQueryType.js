const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} = graphql;
const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const Merchant = mongoose.model('Merchant');
const Order = mongoose.model('Order');
const User = mongoose.model('User');
const UserType = require('./userType');
const OrderType = require('./orderType');
const MerchantType = require('./merchantType');
const ItemType = require('./itemType');

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
    allMerchants: {
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
    },
    merchant: {
      type: MerchantType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Merchant.findById(args.id);
      }
    },
    allItems: {
      type: new GraphQLList(ItemType),
      resolve() {
        return Item.find({})
      }
    },
    item: {
      type: ItemType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Item.findById(args.id);
      }
    }
  }
});

module.exports = RootQuery;
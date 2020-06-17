const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
} = graphql;
const NameType = require('./nameType');
const OrderType = require('./orderType');
const mongoose = require('mongoose');
const Order = require('../models/Order');
const Item = require('../models/Item');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    name: {
      type: NameType,
      resolve(obj) {
        return obj.name;
      }
    },
    email: { type: GraphQLString },
    orders: {
      type: new GraphQLList(OrderType),
      resolve({ id }) {
        return Order.find({ user: id })
          .populate('items')
          .populate('user');
      }
    }
  })
});

module.exports = UserType;
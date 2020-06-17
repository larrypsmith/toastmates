const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString
} = graphql;
const mongoose = require('mongoose');
const ItemType = require('./itemType');
const Order = require('../models/Order');

const OrderType = new GraphQLObjectType({
  name: 'OrderType',
  fields: () => ({
    id: { type: GraphQLID },
    user: {
      type: require('./userType'),
      resolve({ user }) {
        return user;
      }
    },
    items: { 
      type: new GraphQLList(ItemType),
      resolve({ items }) {
        return items;
      }
    }
  })
});

module.exports = OrderType;
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;
const ItemType = require('./itemType');
const Item = require('../models/Item');

const MenuType = new GraphQLObjectType({
  name: 'MenuType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    items: {
      type: new GraphQLList(ItemType),
      resolve({ id }) {
        return Item.find({ menu: id });
      }
    }
  })
});

module.exports = MenuType;
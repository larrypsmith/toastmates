const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;
const ItemType = require('./itemType');
const mongoose = require('mongoose');
const Item = mongoose.model('Item');

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
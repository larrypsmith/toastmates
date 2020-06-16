const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;
const ItemType = require('./itemType');

const MenuType = new GraphQLObjectType({
  name: 'MenuType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent) {
        return parent.items
      }
    }
  })
});

module.exports = MenuType;
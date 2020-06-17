const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } = graphql;

const ItemType = new GraphQLObjectType({
  name: 'ItemType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat }
  })
});

module.exports = ItemType;
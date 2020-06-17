const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = graphql;

const CuisineType = new GraphQLObjectType({
  name: 'CuisineType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

module.exports = CuisineType;
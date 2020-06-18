const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const NameType = new GraphQLObjectType({
  name: 'NameType',
  fields: () => ({
    id: { type: GraphQLID },
    first: { type: GraphQLString },
    last: { type: GraphQLString }
  })
});

module.exports = NameType;
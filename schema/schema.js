const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const RootQueryType = require('./rootQueryType');

module.exports = new GraphQLSchema({
  query: RootQueryType
})
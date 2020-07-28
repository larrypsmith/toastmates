const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const DeliveryTimeType = new GraphQLObjectType({
  name: 'DeliveryTimeType',
  fields: () => ({
    id: { type: GraphQLID },
    low: { type: GraphQLString },
    high: { type: GraphQLString }
  })
});

module.exports = DeliveryTimeType;
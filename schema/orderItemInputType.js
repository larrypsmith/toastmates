const graphql = require('graphql');
const { GraphQLInputObjectType, GraphQLInt, GraphQLID } = graphql;

const OrderItemInputType = new GraphQLInputObjectType({
  name: 'OrderItemInputType',
  fields: () => ({
    itemId: { type: GraphQLID },
    quantity: { type: GraphQLInt }
  })
});

module.exports = OrderItemInputType;
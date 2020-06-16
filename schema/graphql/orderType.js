const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
} = graphql;

const OrderType = new GraphQLObjectType({
  name: 'OrderType',
  fields: {
    id: { type: GraphQLID },
    merchant: { type: GraphQLID },
    items: { 
      type: new GraphQLList(GraphQLID),
      resolve(parent) {
        return parent.items;
      }
    }
  },
});

module.exports = OrderType;
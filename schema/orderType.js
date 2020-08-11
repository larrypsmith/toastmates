const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID
} = graphql;

const OrderType = new GraphQLObjectType({
  name: 'OrderType',
  fields: () => ({
    id: { type: GraphQLID },
    user: { type: require('./userType') },
    items: { type: new GraphQLList(GraphQLID) }
  })
});

module.exports = OrderType;
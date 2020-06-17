const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
} = graphql;
const ItemType = require('./itemType');

const OrderType = new GraphQLObjectType({
  name: 'OrderType',
  fields: () => ({
    id: { type: GraphQLID },
    user: { type: require('./userType') },
    items: { type: new GraphQLList(ItemType) }
  })
});

module.exports = OrderType;
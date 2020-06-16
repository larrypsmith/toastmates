const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
} = graphql;
const NameType = require('./nameType');
const OrderType = require('./orderType');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    name: {
      type: NameType,
      resolve(obj) {
        return obj.name;
      }
    },
    email: { type: GraphQLString },
    orders: {
      type: new GraphQLList(OrderType),
      resolve(parent) {
        return parent.orders;
      }
    }
  })
});

module.exports = UserType;
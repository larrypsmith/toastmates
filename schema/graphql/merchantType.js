const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLFloat,
  GraphQLInt
} = graphql;
const MenuType = require('./menuType');

const MerchantType = new GraphQLObjectType({
  name: 'MerchantType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    cuisine: { type: GraphQLString },
    address: { type: GraphQLString },
    deliveryFee: { type: GraphQLFloat },
    deliveryTimeLower: { type: GraphQLInt},
    deliveryTimeUpper: { type: GraphQLInt},
    photoUrl: { type: GraphQLString },
    menus: {
      type: new GraphQLList(MenuType),
      resolve(parent) {
        parent.menus 
      }
    }
  })
});

module.exports = MerchantType;

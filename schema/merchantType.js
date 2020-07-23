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
const CuisineType = require('./cuisineType');
const DeliveryTimeType = require('./deliveryTimeType');
const mongoose = require('mongoose');
const Menu = mongoose.model('Menu');

const MerchantType = new GraphQLObjectType({
  name: 'MerchantType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    cuisine: { type: CuisineType },
    address: { type: GraphQLString },
    deliveryFee: { type: GraphQLFloat },
    deliveryTime: { type: DeliveryTimeType },
    menus: {
      type: new GraphQLList(MenuType),
      resolve({ id }) {
        return Menu.find({ merchant: id })
      }
    },
    imgUrl: { type: GraphQLString }
  })
});

module.exports = MerchantType;
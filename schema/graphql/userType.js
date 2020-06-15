const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const NameType = require('./nameType');

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
    email: { type: GraphQLString }
  })
});

module.exports = UserType;
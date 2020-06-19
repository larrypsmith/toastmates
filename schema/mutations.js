const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;
const UserType = require('./userType');
const { register, login } = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    register: {
      type: UserType,
      args: {
        fname: { type: new GraphQLNonNull(GraphQLString) },
        lname: { type: new GraphQLNonNull(GraphQLString)},
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(_, data) {
        return register(data);
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(_, data) {
        return login(data);
      }
    }
  }
});

module.exports = mutation;
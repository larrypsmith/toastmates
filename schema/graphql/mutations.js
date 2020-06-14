const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;
const mongoose = require('mongoose');
const UserType = require('./userType');
const User = mongoose.model('User');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    newUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { name, email, password }) {
        return new User({ name, email, password }).save()
      }
    }
  }
});

module.exports = mutation;
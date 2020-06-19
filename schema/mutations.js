const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;
const mongoose = require('mongoose');
const UserType = require('./userType');
const NameType = require('./nameType');
const User = mongoose.model('User');
const { register } = require('../services/auth');

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
    }
  }
});

module.exports = mutation;
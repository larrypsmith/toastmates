const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const mongoose = require('mongoose');
const UserType = require('./userType');
const User = mongoose.model('User');

const PostType = new GraphQLObjectType({
  name: 'PostType',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    author: {
      type: UserType,
      resolve(parentValue) {
        return User.findById(parentValue.author)
          .then(user => user)
          .catch(() => null);
      }
    }
  }
});

module.exports = PostType;
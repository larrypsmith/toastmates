const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require('mongoose');
const User = mongoose.model('User');
// const Post = mongoose.model('Post');
const UserType = require('./userType');
// const PostType = require('./postType');

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({})
      }
    },
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, args) {
        return User.findById(args.id)
      }
    }
    // posts: {
    //   type: new GraphQLList(PostType),
    //   resolve() {
    //     return Post.find({});
    //   }
    // },
    // post: {
    //   type: PostType,
    //   args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    //   resolve(parentValue, args) {
    //     return Post.findById(args.id)
    //   }
    // }
  }
});

module.exports = RootQuery;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const User = require('./models/User')
const Post = require('./models/Post');
const schema = require('./schema/schema');

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.use(bodyParser.json());

const router = express.Router();

app.get('/users', (req, res) => {
  User.find({})
    .populate('posts')
    .then(user => res.json(user))
    .catch(err => res.json(err));
})

app.get('/posts', (req, res) => {
  Post.find({})
    .populate('author')
    .then(posts => res.json(posts))
    .catch(err => res.json(err));
})

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log('Server is running on port 5000'));
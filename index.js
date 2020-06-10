const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const User = require('./models/User');
const Post = require('./models/Post');
const schema = require('./schema/schema');

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

// app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const router = express.Router();

const createNewUser = router.post('/new', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400)
          .json({ email: 'A user has already registered with this address'})
      } else {
        console.log(req.body);
        const { name, email, password } = req.body;
        const newUserObj = new User({
          name,
          email,
          password
        })

        newUserObj.save()
          .then(savedUser => res.json(savedUser))
          .catch(err => console.log(err));
      }
    })
});

const createNewPost = router.post('/new', (req, res) => {
  // remember to import your Post model from Mongoose!
  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    date: req.body.date,
    author: req.body.author
  });

  newPost
    .save()
    .then(savedPost => res.json(savedPost))
    .catch(err => console.log(err));
});

app.use('/users', createNewUser);
app.use('/posts', createNewPost);

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connectd to MongoDB successfully"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log('Server is running on port 5000'));
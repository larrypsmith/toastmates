const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const User = require('./models/User');
const schema = require('./schema/graphql/schema');

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.use(bodyParser.json());

app.post('/users', (req, res) => {
  const user = new User({
    name: {
      first: 'Bird',
      last: 'Man'
    },
    email: 'whatsupdoc@hello.com',
    passwordDigest: 'passwordDigest'
  });

  user.save()
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log('Server is running on port 5000'));
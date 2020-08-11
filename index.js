require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./models/');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.use(cors());

app.use('/graphql',
  graphqlHTTP(req => {
    return {
      schema,
      context: {
        token: req.headers.authorization
      },
      graphiql: true
    }
  })
);

app.use(bodyParser.json());

const db = require('./config/keys').MONGO_URI;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`))
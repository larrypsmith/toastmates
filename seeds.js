const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const Cuisine = require('./models/Cuisine');
const Item = require('./models/Item');
const Menu = require('./models/Menu');
const Merchant = require('./models/Merchant');
const Order = require('./models/Order');
const User = require('./models/User');
const { register } = require('./services/auth');
const bcrypt = require('bcryptjs');

(async function() {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    await deleteAllCollections();
    await saveAllCollections();
    await mongoose.connection.close();
    console.log('DB seeded successfully!');
  } catch(err) {
    console.log(err);
  }
})();

async function deleteAllCollections() {
  try {
    const models = [Cuisine, Item, Menu, Merchant, Order, User];
    
    while (models.length) {
      let model = models.shift();
      await model.deleteMany({}).exec();
    };
  } catch(err) {
    console.log(err);
  }
}

async function saveAllCollections() {
  try {
    const collections = [pizza, giosPizza, giosPizzaPizza, giosPizzaPasta, giosPizzaPizzaCheese, giosPizzaPizzaPepperoni, giosPizzaPastaRigatoni, giosPizzaPastaSpaghetti, stevenFitzgerald, order1];
    
    while (collections.length) {
      let collection = collections.shift();
      await collection.save();
    }
  } catch(err) {
    console.log(err);
  }
}

const pizza = new Cuisine({
  name: 'Pizza'
})

const giosPizza = new Merchant({
  name: `Gio's Pizza`,
  cuisine: pizza.id,
  address: '3601 Lyon Street',
  deliveryFee: 3.99,
  deliveryTimeLower: 25,
  deliveryTimeUpper: 45,
});

const giosPizzaPizza = new Menu({
  name: 'Pizza',
  merchant: giosPizza.id
});

const giosPizzaPasta = new Menu({
  name: 'Pasta',
  merchant: giosPizza.id
});

const giosPizzaPizzaPepperoni = new Item({
  name: 'Pepperoni Pizza',
  price: 17.99,
  menu: giosPizzaPizza.id
})

const giosPizzaPizzaCheese = new Item({
  name: 'Cheese Pizza',
  price: 15.99,
  menu: giosPizzaPizza.id
})

const giosPizzaPastaSpaghetti = new Item({
  name: 'Spaghetti',
  price: 13.99,
  menu: giosPizzaPasta.id
})

const giosPizzaPastaRigatoni = new Item({
  name: 'Rigatoni',
  price: 13.99,
  menu: giosPizzaPasta.id
})

const stevenFitzgerald = new User({
  name: {
    first: 'Steven',
    last: 'Fitzgerald'
  },
  email: 'email@email.com',
  password: bcrypt.hashSync('password', 10)
});

const order1 = new Order({
  user: stevenFitzgerald.id,
  items: [
    giosPizzaPastaRigatoni.id,
    giosPizzaPizzaCheese.id
  ]
});
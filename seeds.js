const mongoose = require('mongoose');
const User = require('./models/User');
const Merchant = require('./models/Merchant');

const db = require('./config/keys').mongoURI;

(async function() {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    await deleteMerchants();
    await seedMerchants();
    await deleteUsers();
    await seedUsers();
    await mongoose.connection.close();
    console.log('DB seeded successfully!');
  } catch(err) {
    console.log(err);
  }
})();

async function deleteMerchants() {
  try {
    await Merchant.deleteMany({}).exec();
  } catch(err) {
    console.log(err);
  }
};

const giosPizza = new Merchant({
  name: `Gio's Pizza`,
  cuisine: `Pizza`,
  address: '3601 Lyon Street',
  deliveryFee: 3.99,
  deliveryTimeLower: 25,
  deliveryTimeUpper: 45,
  menus: [
    {
      name: 'Pizza',
      items: [
        {
          name: 'Pepperoni Pizza',
          price: 19.99
        },
        {
          name: 'Cheese Pizza',
          price: 17.99
        }
      ]
    },
    {
      name: 'Pasta',
      items: [
        {
          name: 'Fettuccini Alredo',
          price: 13.99
        },
        {
          name: 'Spaghetti Carbonara',
          price: 16.99
        }
      ]
    }
  ]
});

async function seedMerchants() {
  try {
    await giosPizza.save();
  } catch(err) {
    console.log(err);
  };
};

async function deleteUsers() {
  try { 
    await User.deleteMany({}).exec();
  } catch(err) {
    console.log(err);
  };
};

const stevenFitzgerald = new User({
  name: {
    first: 'Steven',
    last: 'Fitzgerald'
  },
  email: 'email@email2.com',
  passwordDigest: 'notARealDigest',
  orders: [
    {
      merchant: giosPizza.id,
      items: [
        giosPizza.menus[0].items[1].id,
        giosPizza.menus[1].items[1].id
      ]
    }
  ]
});

async function seedUsers() {
  try {
    await stevenFitzgerald.save();
  } catch (err) {
    console.log(err)
  }
};
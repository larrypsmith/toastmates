const mongoose = require('mongoose');
const User = require('./models/User');
const Merchant = require('./models/Merchant');

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => {seed()})
  .then(() => {mongoose.connection.close()})
  .catch(err => console.log(err));

const seed = async () => {
  try {
  await Merchant.deleteMany({}).exec();

  const giosPizza = new Merchant({
    name: `Gio's Pizza`,
    cuisine: `Pizza`,
    address: '3601 Lyon Street',
    deliveryFee: 2.99,
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

  }, function (err) {
    if (err) console.log(err)
  });

  await giosPizza.save();

  await User.deleteMany({});

  const stevenFitzgerald = await User.create({
    name: {
      first: 'Steven',
      last: 'Fitzgerald'
    },
    email: 'email@email.com',
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
  }, function (err) {
    if (err) console.log(err)
  });
} catch(err) {
  console.log(err)
}
}
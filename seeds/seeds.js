const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;
const Cuisine = require('../models/Cuisine');
const Item = require('../models/Item');
const Menu = require('../models/Menu');
const Merchant = require('../models/Merchant');
const Order = require('../models/Order');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { uploadSeedImage, emptySeedsBucket } = require('../services/s3');

(async function() {
  try {
    console.log('Connecting to DB...');
    await mongoose.connect(db, { useNewUrlParser: true });

    console.log('Deleting existing collections...');
    await deleteAllCollections();

    console.log('Emptying seeds bucket');
    await emptySeedsBucket();

    console.log('Seeding documents...')
    await seedAllDocuments();
    
    console.log('DB seeded successfully!');
    await mongoose.connection.close();
  } catch(err) {
    console.log(err);
  }
})();

const deleteAllCollections = async () => {
  try {
    const models = [Cuisine, Item, Menu, Merchant, Order, User];
    
    for (let model of models) {
      await model.deleteMany({}).exec();
    };
  } catch(err) {
    console.log(err);
  }
}

// upload image, add image url to model params, save model
const seedModel = async (Model, params) => {
  try {
    if (params.imgUrl) {
      params.imgUrl = await uploadSeedImage(params.imgUrl);
      console.log('imgUrl: ', params.imgUrl);
    }

    const model = new Model(params);
    await model.save();
    console.log('model: ', model);
    return model;
  } catch(err) {
    console.log(err);
  }
};

const seedAllDocuments = async () => {
  try {
    const pizza = await seedModel(Cuisine, {
      name: 'Pizza'
    })

    const burgers = await seedModel(Cuisine, {
      name: 'Burgers'
    });
    
    const roma = await seedModel(Merchant, {
      name: `Roma Pizza`,
      cuisine: pizza.id,
      address: '3242 Scott St',
      deliveryFee: 3.99,
      deliveryTime: {
        low: 25,
        high: 45
      },
      imgUrl: 'seeds/roma.png'
    });

    const shakeStop = await seedModel(Merchant, {
      name: 'Shake Stop',
      cuisine: burgers.id,
      address: '3060 Fillmore St',
      deliveryFee: 2.99,
      deliveryTime: {
        low: 30,
        high: 50
      },
      imgUrl: 'seeds/shake-stop.png'
    })

    const romaPizza = await seedModel(Menu, {
      name: 'Pizza',
      merchant: roma.id
    });
    
    const romaPasta = await seedModel(Menu, {
      name: 'Pasta',
      merchant: roma.id
    });
    
    const shakeStopBurgers = await seedModel(Menu, {
      name: 'Burgers',
      merchant: shakeStop.id
    })

    const shakeStopSides = await seedModel(Menu, {
      name: 'Sides',
      merchant: shakeStop.id
    })

    const romaPepperoni = await seedModel(Item, {
      name: 'Pepperoni Pizza',
      price: 17.99,
      menu: romaPizza.id
    })
    
    const romaCheese = await seedModel(Item, {
      name: 'Cheese Pizza',
      price: 15.99,
      menu: romaPizza.id
    })
    
    const romaSpaghetti = await seedModel(Item, {
      name: 'Spaghetti',
      price: 13.99,
      menu: romaPasta.id
    })
    
    const romaRigatoni = await seedModel(Item, {
      name: 'Rigatoni',
      price: 13.99,
      menu: romaPasta.id
    })

    const cheeseburger = await seedModel(Item, {
      name: 'Cheeseburger',
      price: 7.99,
      menu: shakeStopBurgers.id
    })

    const hamburger = await seedModel(Item, {
      name: 'Hamburger',
      price: 6.99,
      menu: shakeStopBurgers.id
    })

    const frenchFries = await seedModel(Item, {
      name: 'French Fries',
      price: 3.99,
      menu: shakeStopSides.id
    });

    const onionRings = await seedModel(Item, {
      name: 'Onion Rings',
      price: 4.99,
      menu: shakeStopSides
    })
    
    const johnDoe = await seedModel(User, {
      name: {
        first: 'John',
        last: 'Doe'
      },
      email: 'johndoe@mail.com',
      password: bcrypt.hashSync('password', 10)
    });
    
    const order1 = await seedModel(Order, {
      user: johnDoe.id,
      items: [
        romaRigatoni.id,
        romaCheese.id
      ]
    });

    const order2 = await seedModel(Order, {
      user: johnDoe.id,
      items: [
        cheeseburger.id,
        frenchFries.id
      ]
    });
  } catch(err) {
    console.log(err);
  }
};
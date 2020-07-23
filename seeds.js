const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const Cuisine = require('./models/Cuisine');
const Item = require('./models/Item');
const Menu = require('./models/Menu');
const Merchant = require('./models/Merchant');
const Order = require('./models/Order');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const { uploadSeedImage, emptySeedsBucket } = require('./services/s3');

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
    
    const gios = await seedModel(Merchant, {
      name: `Gio's Pizza`,
      cuisine: pizza.id,
      address: '3601 Lyon Street',
      deliveryFee: 3.99,
      deliveryTime: {
        low: 25,
        high: 45
      },
      imgUrl: 'services/hero-food.png'
    });

    const giosPizza = await seedModel(Menu, {
      name: 'Pizza',
      merchant: gios.id
    });
    
    const giosPasta = await seedModel(Menu, {
      name: 'Pasta',
      merchant: gios.id
    });
    
    const giosPepperoni = await seedModel(Item, {
      name: 'Pepperoni Pizza',
      price: 17.99,
      menu: giosPizza.id
    })
    
    const giosCheese = await seedModel(Item, {
      name: 'Cheese Pizza',
      price: 15.99,
      menu: giosPizza.id
    })
    
    const giosSpaghetti = await seedModel(Item, {
      name: 'Spaghetti',
      price: 13.99,
      menu: giosPasta.id
    })
    
    const giosRigatoni = await seedModel(Item, {
      name: 'Rigatoni',
      price: 13.99,
      menu: giosPasta.id
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
        giosRigatoni.id,
        giosCheese.id
      ]
    });
  } catch(err) {
    console.log(err);
  }
};
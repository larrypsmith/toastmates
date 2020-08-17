const mongoose = require('mongoose');
const db = require('../config/keys').MONGO_URI;
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
    throw new Error(err.message);
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
    throw new Error(err.message);
  }
};

const seedAllDocuments = async () => {
  try {
    const pizza = await seedModel(Cuisine, {
      name: 'Pizza'
    });

    const burgers = await seedModel(Cuisine, {
      name: 'Burgers'
    });

    const asian = await seedModel(Cuisine, {
      name: 'Asian'
    });

    const friedChicken = await seedModel(Cuisine, {
      name: 'Fried Chicken'
    })

    const roma = await seedModel(Merchant, {
      name: `Roma`,
      cuisine: pizza.id,
      address: '3242 Scott St',
      deliveryFee: 3.99,
      deliveryTime: {
        low: 25,
        high: 45
      },
      imgUrl: 'seeds/roma.png'
    });

    const firella = await seedModel(Merchant, {
      name: 'Firella Polk',
      cuisine: pizza.id,
      address: '2238 Polk St',
      deliveryFee: 2.99,
      deliveryTime: {
        low: 40,
        high: 50
      },
      imgUrl: 'seeds/firella.webp'
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
    });

    const asianBowl = await seedModel(Merchant, {
      name: 'Asian Bowl',
      cuisine: asian.id,
      address: '2031 Chestnut St',
      deliveryFee: 4.99,
      deliveryTime: {
        low: 35,
        high: 50
      },
      imgUrl: 'seeds/asian-bowl.webp'
    });
    
    const hopeyes = await seedModel(Merchant, {
      name: 'Hopeyes Louisiana Kitchen',
      cuisine: friedChicken.id,
      address: '1426 Fillmore St',
      deliveryFee: 2.99,
      deliveryTime: {
        low: 50,
        high: 55
      },
      imgUrl: 'seeds/hopeyes.webp'
    });

    const firellaPizza = await seedModel(Menu, {
      name: 'Pizza',
      merchant: firella.id
    });

    const firellaPasta = await seedModel(Menu, {
      name: 'Pasta',
      merchant: firella.id
    });

    const firellaDessert = await seedModel(Menu, {
      name: 'Dessert',
      merchant: firella.id
    });

    const chickenSandwiches = await seedModel(Menu, {
      name: 'Chicken Sandwiches',
      merchant: hopeyes.id
    });

    const chickenCombos = await seedModel(Menu, {
      name: 'Chicken Combos',
      merchant: hopeyes.id
    });

    const seafoodCombos = await seedModel(Menu, {
      name: 'Seafood Combos',
      merchant: hopeyes.id
    });

    const signatureBowls = await seedModel(Menu, {
      name: 'Signature Bowls',
      merchant: asianBowl.id
    });

    const rolls = await seedModel(Menu, {
      name: 'Rolls',
      merchant: asianBowl.id
    });

    const romaPizza = await seedModel(Menu, {
      name: 'Pizza',
      merchant: roma.id
    });
    
    const romaPasta = await seedModel(Menu, {
      name: 'Pasta',
      merchant: roma.id
    });

    const romaSalads = await seedModel(Menu, {
      name: 'Salads',
      merchant: roma.id
    });
    
    const shakeStopSandwiches = await seedModel(Menu, {
      name: 'Sandwiches',
      merchant: shakeStop.id
    });

    const shakeStopSides = await seedModel(Menu, {
      name: 'Sides',
      merchant: shakeStop.id
    });

    const shakeStopDrinks = await seedModel(Menu, {
      name: 'Drinks',
      merchant: shakeStop.id
    });

    const romaSalsiccia = await seedModel(Item, {
      name: 'Salsiccia Pizza',
      price: 17.99,
      menu: romaPizza.id,
      description: 'Mozzarella, Italian sausage, mushroom, onion & tomato sauce.',
      imgUrl: 'seeds/salsiccia.webp'
    });
    
    const romaMargherita = await seedModel(Item, {
      name: 'Margherita Pizza',
      price: 15.99,
      menu: romaPizza.id,
      description: 'Fresh basil, tomato sauce, Fior di latte & EVOO. Vegetarian.',
      imgUrl: 'seeds/margherita.png'
    });

    const romaProsciutto = await seedModel(Item, {
      name: 'Prosciutto Pizza',
      price: 17.00,
      menu: romaPizza.id,
      description: 'Creamy burrata cheese, arugula, pesto with prosciutto di parma',
      imgUrl: 'seeds/prosciutto.png'
    });
    
    const romaCarbonara = await seedModel(Item, {
      name: 'Carbonara',
      price: 13.99,
      menu: romaPasta.id,
      description: 'Mezze maniche smoked guanciale in creamy yolk sauce & pecorino. Pasta served al dente.'
    });
    
    const romaRigatoni = await seedModel(Item, {
      name: 'Rigatoni',
      price: 13.99,
      menu: romaPasta.id
    });

    const beet = await seedModel(Item, {
      name: 'Beet Salad',
      price: 7.00,
      menu: romaSalads.id,
      description: 'Roasted beets, baby spinach, salted ricotta with extra virgin olive oil',
      imgUrl: 'seeds/beet.webp'
    });

    const caesar = await seedModel(Item, {
      name: 'Caesar Salad',
      price: 8.00,
      menu: romaSalads.id,
      description: 'Romaine lettuce, shaved Parmigiano, croutons & garlic aioli',
      imgUrl: 'seeds/caesar.webp'
    });

    const tuna = await seedModel(Item, {
      name: 'Tuna Salad',
      price: 11.00,
      menu: romaSalads.id,
      description: 'Wild albacore tuna, sweet corn, chickpeas, caramelized onion with organic mix greens',
      imgUrl: 'seeds/tuna.webp'
    });

    const cheeseburger = await seedModel(Item, {
      name: 'Cheeseburger',
      price: 5.99,
      menu: shakeStopSandwiches.id,
      description: 'Cheeseburger topped with lettuce, tomato, onion, and special sauce',
      imgUrl: 'seeds/cheeseburger.png'
    });

    const smokeburger = await seedModel(Item, {
      name: 'Smokeburger',
      price: 6.99,
      menu: shakeStopSandwiches.id,
      description: 'Cheeseburger topped with Applewood Smoked Bacon, chopped cherry peppers and ShackSauce',
      imgUrl: 'seeds/smoke-burger.webp'
    });

    const mushroomBurger = await seedModel(Item, {
      name: 'Mushroom Burger',
      price: 6.99,
      menu: shakeStopSandwiches.id,
      description: 'Cheeseburger and a ’Shroom Burger topped with lettuce, tomato and ShackSauce',
      imgUrl: 'seeds/mushroom-burger.webp'
    });

    const chickenSandwich = await seedModel(Item, {
      name: 'Chicken Sandwich',
      price: 6.99,
      menu: shakeStopSandwiches.id,
      description: 'Crispy chicken breast topped with lettuce, pickles and buttermilk herb mayo',
      imgUrl: 'seeds/chicken-sandwich.webp'
    });

    const grilledCheese = await seedModel(Item, {
      name: 'Grilled Cheese',
      price: 4.99,
      menu: shakeStopSandwiches.id,
      description: 'American cheese melted in a grilled potato bun',
      imgUrl: 'seeds/grilled-cheese.webp'
    });

    const frenchFries = await seedModel(Item, {
      name: 'French Fries',
      price: 3.99,
      menu: shakeStopSides.id,
      description: 'Crispy crinkle cut fries',
      imgUrl: 'seeds/french-fries.webp'
    });

    const cheeseFries = await seedModel(Item, {
      name: 'Cheese Fries',
      price: 4.99,
      menu: shakeStopSides.id,
      description: 'Topped with our special blend of cheddar and American cheese sauce',
      imgUrl: 'seeds/cheese-fries.webp'
    });

    const baconCheeseFries = await seedModel(Item, {
      name: 'Bacon Cheese Fries',
      price: 5.99,
      menu: shakeStopSides.id,
      description: 'Topped with Applewood Smoked Bacon and cheese sauce',
      imgUrl: 'seeds/bacon-cheese-fries.webp'
    });

    const milkshake = await seedModel(Item, {
      name: 'Milkshake',
      price: 5.99,
      menu: shakeStopDrinks.id,
      description: 'Handmade frozen custard ice cream, spun fresh daily',
      imgUrl: 'seeds/milkshake.webp'
    });

    const lemonade = await seedModel(Item, {
      name: 'Lemonade',
      price: 3.99,
      menu: shakeStopDrinks.id,
      description: 'Sweetened with simple syrup',
      imgUrl: 'seeds/lemonade.webp'
    })

    const garden = await seedModel(Item, {
      name: 'The Garden',
      price: 13.99,
      menu: signatureBowls.id,
      description: 'Vegan. Extra tofu, brown rice, extra steamed veggies. All toppings (No Jalapeños), extra coconut curry.',
      imgUrl: 'seeds/garden-bowl.webp'
    });

    const workout = await seedModel(Item, {
      name: 'The Workout',
      price: 13.99,
      menu: signatureBowls.id,
      description: 'Chicken, brown rice, extra steamed veggies, bean sprouts, pickled veggies, herbs, tamarind vinaigrette.',
      imgUrl: 'seeds/workout-bowl.webp'
    });

    const chickenCurry = await seedModel(Item, {
      name: 'Chicken Curry',
      price: 14.99,
      menu: signatureBowls.id,
      description: 'Potatoes, carrots, jasmine rice, coconut curry sauce, all toppings (no jalapenos), side of Sriracha.',
      imgUrl: 'seeds/chicken-curry.webp'
    });

    const oxBox = await seedModel(Item, {
      name: 'The Ox Box',
      price: 15.99,
      menu: signatureBowls.id,
      description: 'Double steak, jasmine rice, sauce tossed veggies. All Toppings, caramel egg, sriracha',
      imgUrl: 'seeds/ox-box.webp'
    });

    const shrimpSpringRoll = await seedModel(Item, {
      name: 'Shrimp Spring Roll',
      price: 5.49,
      menu: rolls.id,
      imgUrl: 'seeds/shrimp-spring-roll.webp'
    });

    const tofuSpringRoll = await seedModel(Item, {
      name: 'Tofu Spring Roll',
      price: 5.49,
      menu: rolls.id,
      imgUrl: 'seeds/tofu-spring-roll.webp'
    });

    const classicChicken = await seedModel(Item, {
      name: 'Classic Chicken Sandwich Combo',
      price: 12.49,
      menu: chickenSandwiches.id,
      imgUrl: 'seeds/classic-chicken-sandwich.webp',
      description: 'Includes a choice of side and drink'
    });
    
    const spicyChicken = await seedModel(Item, {
      name: 'Spicy Chicken Sandwich Combo',
      price: 12.49,
      menu: chickenSandwiches.id,
      imgUrl: 'seeds/classic-chicken-sandwich.webp',
      description: 'Includes a choice of side and drink'
    });

    const chickenCombo2 = await seedModel(Item, {
      name: 'Chicken Combo (2Pcs)',
      price: 10.89,
      menu: chickenCombos.id,
      imgUrl: 'seeds/chicken-combo-2.webp',
      description: 'Includes a choice of side, biscuit, and a drink'
    });

    const chickenCombo3 = await seedModel(Item, {
      name: 'Chicken Combo (3Pcs)',
      price: 12.49,
      menu: chickenCombos.id,
      imgUrl: 'seeds/chicken-combo-3.webp',
      description: 'Includes a choice of side, biscuit, and a drink'
    });

    const tenderCombo3 = await seedModel(Item, {
      name: 'Handcrafted Tender Combo (3Pcs)',
      price: 11.49,
      menu: chickenCombos.id,
      imgUrl: 'seeds/tender-combo-3.webp',
      description: 'Includes a choice of side, biscuit, and a drink'
    });

    const tenderCombo5 = await seedModel(Item, {
      name: 'Handcrafted Tender Combo (5Pcs)',
      price: 14.49,
      menu: chickenCombos.id,
      imgUrl: 'seeds/tender-combo-5.webp',
      description: 'Includes a choice of side, biscuit, and a drink'
    });

    const burrata = await seedModel(Item, {
      name: 'Burrate Pie',
      price: 21.99,
      menu: firellaPizza.id,
      imgUrl: 'seeds/burrata-pie.webp',
      description: 'D.O.P. Cherry Tomato, Fresh Basil & A Whole Ball of Angelo and Franco Burrata'
    });

    const margheritaPie = await seedModel(Item, {
      name: 'Margherita Pie',
      price: 16.99,
      menu: firellaPizza.id,
      imgUrl: 'seeds/margherita-pie.png',
      description: 'Tomato, Basil & Fior di Latte'
    });

    const pepperoniPie = await seedModel(Item, {
      name: 'Pepperoni Pie',
      price: 20.99,
      menu: firellaPizza.id,
      imgUrl: 'seeds/pepperoni-pie.webp',
      description: 'Tomato, Basil & Fior di Latte'
    });

    const cacioEPepe = await seedModel(Item, {
      name: 'Cacio e Pepe',
      price: 16.99,
      menu: firellaPasta.id,
      imgUrl: 'seeds/cacio-e-pepe.webp',
      description: 'Chitarra Pasta with Black Pepper, Pecorino & Butter'
    });

    const pomodoro = await seedModel(Item, {
      name: 'Pomodoro',
      price: 17.99,
      menu: firellaPasta.id,
      imgUrl: 'seeds/pomodoro.webp',
      description: 'Bucatini with Cherry Tomatoes, Garlic, Basil & Parmigiano'
    });

    const budino = await seedModel(Item, {
      name: 'Budino',
      price: 10.99,
      menu: firellaDessert.id,
      imgUrl: 'seeds/budino.webp',
      description: 'A Rich and Dense Chocolate pudding with Candied Hazelnuts & Sea Salt'
    });

    const tiramisu = await seedModel(Item, {
      name: 'Tiramisu',
      price: 10.99,
      menu: firellaDessert.id,
      imgUrl: 'seeds/tiramisu.webp',
      description: 'Espresso Soaked Ladyfingers, Mascarpone & Cocoa'
    });

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
        romaCarbonara.id,
        romaSalsiccia.id
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
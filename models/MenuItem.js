const mongoose = require('mongoose');


//data sample json
// {
// "name": "Spicy Chicken Curry",
// "price": 12.99,
// "taste": "spicy",
// "is_drink": false,
// "ingredients": ["chicken", "spices", "vegetables"],
// "num_sales": 50
// }

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true,
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingredients:{
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0,
    }
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
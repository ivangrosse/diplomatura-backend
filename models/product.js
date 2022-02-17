const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    price: {
        type: Number,
        required: [true, 'Price field is required']
    },
    imageUrl: {
        type: String
    }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
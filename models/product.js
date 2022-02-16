const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    },
    price: {
        type: Number,
        deafult: 0
    }
});


const Student = mongoose.model('product', ProductSchema);

module.exports = Student;
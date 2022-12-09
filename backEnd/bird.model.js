const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bird = new Schema({
    name: {
        type: String
    },
    ringNumber: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: String
    },
    cageNumber: {
        type: Number
    },
    isPurchased: {
        type: Boolean
    },
    isFarmBreed: {
        type: Boolean
    },
    isPaired: {
        type: Boolean
    }
});

module.exports = mongoose.model('Bird', Bird);
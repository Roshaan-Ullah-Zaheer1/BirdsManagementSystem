const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bird = new Schema({
    birdId: {
        type: Number
    },
    serialNumber:{
        type:Number
    },
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
    isPaired: {
        type: Boolean
    },
    birdSource: {
        type: String
    }
});

module.exports = mongoose.model('bird', bird);

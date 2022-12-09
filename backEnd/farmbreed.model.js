const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Farmbreed = new Schema({
    fatherId: {
        type: Number
    },
    motherId: {
        type: Number
    },
    hatchDate: {
        type: String
    }
});

module.exports = mongoose.model('Farmbreed', Farmbreed);
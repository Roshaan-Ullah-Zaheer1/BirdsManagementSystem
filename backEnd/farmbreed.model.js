const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let farmbreed = new Schema({
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

module.exports = mongoose.model('farmbreed', farmbreed);
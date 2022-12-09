const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Pair = new Schema({
    pairId: {
        type: Number
    },
    maleId: {
        type: Number
    },
    femaleId: {
        type: Number
    },
   dateOfPairing: {
        type: String
    },
    pairNumber: {
        type: Number
    },
    comments: {
        type: String
    }
});

module.exports = mongoose.model('Pair', Pair);
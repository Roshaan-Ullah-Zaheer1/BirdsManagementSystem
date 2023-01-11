const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pair = new Schema({
    maleId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'bird'
    },
    femaleId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'bird'
    },
    dateOfPairing: {
        type: String
    },
    comments: {
        type: String
    }
});

module.exports = mongoose.model('pair', pair);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let farmbreed = new Schema({
    fatherId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'bird'
    },
    motherId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'bird'
    },
    hatchDate: {
        type: String
    },
    bird:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bird'
    }
});

module.exports = mongoose.model('farmbreed', farmbreed);
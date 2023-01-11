const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let purchased = new Schema({
    purchasedDate:{
        type: String
    },
    bird:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bird'
    },
    purchasedPrice: {
        type: Number
    },
    sellerName: {
        type: String
    },
    sellerPhoneNumber: {
        type: String
    },
    sellerDetails: {
        type: String
    }
});

module.exports = mongoose.model('purchased', purchased);
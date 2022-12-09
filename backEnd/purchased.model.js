const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Purchased = new Schema({
    purchasedId: {
        type: Number
    },
    purchasedRate: {
        type: Number
    },
    purchasedDate: {
        type: String
    },
    purchasedDetails: {
        type: String
    },
    purchaserName: {
        type: String
    },
    purchaserContactNumber: {
        type: Number
    }
});

module.exports = mongoose.model('Purchased', Purchased);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sale = new Schema({
    id: {
        type: Number
    },
    birdId: {
        type: Number
    },
    recordNumber: {
        type: Number
    },
    ringNumber: {
        type: Number
    },
    gender: {
        type: Number
    },
    age: {
        type: Number
    },
    soldDate: {
        type: String
    },
    soldPrice: {
        type: Number
    },
    clientName: {
        type: String
    },
    clientDetails: {
        type: String
    },
    clientPhoneNo: {
        type: Number
    }
});

module.exports = mongoose.model('Sale', Sale);
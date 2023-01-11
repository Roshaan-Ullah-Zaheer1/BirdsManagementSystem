const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sale = new Schema({
    soldDate:{
        type: String
    },
    bird:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bird'
    },
    Price: {
        type: Number
    },
    purchaserName: {
        type: String
    },
    purchaserPhoneNumber: {
        type: String
    },
    purchaserDetails: {
        type: String
    }
});

module.exports = mongoose.model('Sale', Sale);
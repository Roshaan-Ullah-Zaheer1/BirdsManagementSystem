const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let daybook = new Schema({
    dateOfExpense: {
        type: String
    },
    amountOfExpense: {
        type: Number
    },
    nameOfExpense: {
        type: String
    },
    typeOfExpense: {
        type: String
    },
    detailOfExpense: {
        type: String
    },
});

module.exports = mongoose.model('daybook', daybook);
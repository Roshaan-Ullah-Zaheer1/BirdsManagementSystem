const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

var birdRoutes = require('./birdRoutes');
var purchasedRoutes = require('./purchasedRoutes');
var farmbreedRoutes = require('./farmbreedRoutes');
var pairRoutes = require('./pairRoutes');
var saleRoutes = require('./saleRoutes');

app.use('/bird', birdRoutes);
app.use('/purchased', purchasedRoutes);
app.use('/farmbreed', farmbreedRoutes);
app.use('/pair', pairRoutes);
app.use('/sale', saleRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/birdDB', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
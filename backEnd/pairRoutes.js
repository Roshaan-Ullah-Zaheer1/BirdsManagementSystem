
const express = require('express');
const app = express();
const pairRoutes = express.Router();

let pair = require('./pair.model');

pairRoutes.route('/').get(function(req, res) {
    pair.find(function(err, pair) {
        if (err) {
            console.log(err);
        } else {
            res.json(pair);
        }
    });
});

pairRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    pair.findById(id, function(err, pair) {
        res.json(pair);
    });
});

pairRoutes.route('/update/:id').post(function(req, res) {
    pair.findById(req.params.id, function(err, pair) {
        if (!pair)
            res.status(404).send("data is not found");
        else
            pair.pairId = req.body.pairId;
            pair.maleId = req.body.maleId;
            pair.femaleId = req.body.femaleId;
            pair.dateOfPairing = req.body.dateOfPairing;
            pair.pairNumber = req.body.pairNumber;
            pair.comments = req.body.comments;

            pair.save().then(pair => {
                res.json('pair updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

pairRoutes.route('/add').post(function(req, res) {
    let pair = new pair(req.body);
    pair.save()
        .then(pair => {
            res.status(200).json({'pair': 'pair bird added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding pair bird failed');
        });
});


module.exports = pairRoutes;
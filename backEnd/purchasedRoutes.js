
const express = require('express');
const app = express();
const purchasedRoutes = express.Router();

let purchased = require('./purchased.model');

purchasedRoutes.route('/').get(function(req, res) {
    purchased.find(function(err, purchased) {
        if (err) {
            console.log(err);
        } else {
            res.json(purchased);
        }
    });
});

purchasedRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    purchased.findById(id, function(err, purchased) {
        res.json(purchased);
    });
});

purchasedRoutes.route('/update/:id').post(function(req, res) {
    purchased.findById(req.params.id, function(err, purchased) {
        if (!purchased)
            res.status(404).send("data is not found");
        else
            purchased.purchasedId = req.body.purchasedId;
            purchased.purchasedRate = req.body.purchasedRate;
            purchased.purchasedDate = req.body.purchasedDate;
            purchased.purchasedDetails = req.body.purchasedDetails;
            purchased.purchaserName = req.body.purchaserName;
            purchased.purchaserContactNumber = req.body.purchaserContactNumber;

            purchased.save().then(purchased => {
                res.json('purchased updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

purchasedRoutes.route('/add').post(function(req, res) {
    let purchased = new purchased(req.body);
    purchased.save()
        .then(purchased => {
            res.status(200).json({'purchased': 'purchased bird added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding purchased bird failed');
        });
});


module.exports = purchasedRoutes;
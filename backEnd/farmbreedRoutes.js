
const express = require('express');
const app = express();
const farmbreedRoutes = express.Router();

let farmbreedModel = require('./farmbreed.model');

farmbreedRoutes.route('/').get(function(req, res) {
    farmbreedModel.find(function(err, farmbreed) {
        if (err) {
            console.log(err);
        } else {
            res.json(farmbreed);
        }
    });
});

farmbreedRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    farmbreedModel.findById(id, function(err, farmbreed) {
        res.json(farmbreed);
    });
});

farmbreedRoutes.route('/update/:id').post(function(req, res) {
    farmbreedModel.findById(req.params.id, function(err, farmbreed) {
        if (!farmbreed)
            res.status(404).send("data is not found");
        else
            farmbreed.fatherId = req.body.fatherId;
            farmbreed.motherId = req.body.motherId;
            farmbreed.hatchDate = req.body.hatchDate;
            farmbreed.save().then(farmbreed => {
                res.json('farmbreed updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

farmbreedRoutes.route('/add').post(function(req, res) {
    let farmbreed = new farmbreedModel(req.body);
    farmbreed.save()
        .then(farmbreed => {
            res.status(200).json({'farmbreed': 'farmbreed bird added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding farmbreed bird failed');
        });
});


module.exports = farmbreedRoutes;
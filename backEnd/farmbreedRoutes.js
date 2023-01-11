
const express = require('express');
const app = express();
const farmbreedRoutes = express.Router();
var ObjectId = require('mongodb').ObjectID;

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

farmbreedRoutes.route('/getByBird/:bird').get(function(req, res) {
    let query = { bird: ObjectId(req.params.bird) };
    farmbreedModel.findOne(query, function(err, farmbreed) {
        if (err) {
            console.log(err);
        } else {
            console.log(farmbreed);
            res.json(farmbreed);
        }
    });
});

farmbreedRoutes.route('/update/:id').put(function(req, res) {
    farmbreedModel.findById(req.params.id, function(err, farmbreed) {
        if (!farmbreed)
            res.status(404).send("data is not found");
        else
            farmbreed.bird= req.body.bird;
            farmbreed.fatherId = req.body.fatherId;
            farmbreed.motherId = req.body.motherId;
            farmbreed.hatchDate = req.body.hatchDate;
            farmbreed.save().then(farmbreed => {
                res.json(farmbreed);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

farmbreedRoutes.route('/add').post(function(req, res) {
    console.log(req);
    let farmbreed = new farmbreedModel(req.body);
    farmbreed.save()
        .then(farmbreed => {
            res.status(200).json({'farmbreed': farmbreed});
        })
        .catch(err => {
            console.log(err);
            res.status(400).send(err);
        });
});


module.exports = farmbreedRoutes;
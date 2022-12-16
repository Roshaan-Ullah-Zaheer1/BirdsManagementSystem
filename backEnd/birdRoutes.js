const express = require('express');
const app = express();
const birdRoutes = express.Router();

let birdModel = require('./bird.model');

birdRoutes.route('/').get(function(req, res) {
    birdModel.find(function(err, bird) {
        if (err) {
            console.log(err);
        } else {
            res.json(bird);
        }
    });
});

birdRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    birdModel.findById(id, function(err, bird) {
        res.json(bird);
    });
});

birdRoutes.route('/update/:id').post(function(req, res) {
    birdModel.findById(req.params.id, function(err, bird) {
        if (!bird)
            res.status(404).send("data is not found");
        else
            bird.name = req.body.name;
            bird.ringNumber = req.body.ringNumber;
            bird.gender = req.body.gender;
            bird.age = req.body.age;
            bird.cageNumber = req.body.cageNumber;
            bird.isPurchased = req.body.isPurchased;
            bird.isFarmBreed = req.body.isFarmBreed;
            bird.isPaired = req.body.isPaired

            bird.save().then(bird => {
                res.json('bird updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

birdRoutes.route('/add').post(function(req, res) {
    let bird = new birdModel(req.body);
    bird.save()
        .then(bird => {
            res.status(200).json({'bird': 'bird added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new bird failed');
        });
});


module.exports = birdRoutes;
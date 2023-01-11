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
birdRoutes.route('/getByGender/:gender').get(function(req, res) {
    let gen = req.params.gender;
    var query = { gender: gen };
    birdModel.find(query,function(err, birds) {
        if (err) {
            console.log(err);
        } else {
            res.json(birds);
        }
    });
});
birdRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    birdModel.findById(id, function(err, bird) {
        res.json(bird);
    });
});
birdRoutes.route('/delete/:id').delete(function(req, res) {
    let id = req.params.id;
    birdModel.findByIdAndRemove(id, function(err, bird) {
        if (err) {
            console.log(err);
        } else {
            res.json(bird);
        }
    });
});
birdRoutes.route('/update/:id').put(function(req, res) {
    birdModel.findById(req.params.id, function(err, bird) {
        if (!bird)
            res.status(404).send("data is not found");
        else
            bird.serialNumber = req.body.serialNumber;
            bird.name = req.body.name;
            bird.ringNumber = req.body.ringNumber;
            bird.gender = req.body.gender;
            bird.age = req.body.age;
            bird.cageNumber = req.body.cageNumber;
            bird.birdSource = req.body.birdSource;
            bird.isPaired = req.body.isPaired

            bird.save().then(bird => {
                res.json(bird);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

birdRoutes.route('/add').post(function(req, res) {
    let bird = new birdModel(req.body);
    console.log(bird);
    bird.save()
        .then(bird => {
            res.status(200).json({'bird': bird});
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


module.exports = birdRoutes;
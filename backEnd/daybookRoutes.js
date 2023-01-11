
const express = require('express');
const app = express();
const daybookRoutes = express.Router();

let daybookModel = require('./daybook.model');
var ObjectId = require('mongodb').ObjectID;

daybookRoutes.route('/').get(function(req, res) {
    daybookModel.find(function(err, daybook) {
        if (err) {
            console.log(err);
        } else {
            res.json(daybook);
        }
    });
});

daybookRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    daybookModel.findById(id, function(err, daybook) {
        res.json(daybook);
    });
});
daybookRoutes.route('/delete/:id').delete(function(req, res) {
    let id = req.params.id;
    daybookModel.findByIdAndRemove(id, function(err, daybook) {
        if (err) {
            console.log(err);
        } else {
            res.json(daybook);
        }
    });
});
daybookRoutes.route('/update/:id').post(function(req, res) {
    daybook.findById(req.params.id, function(err, daybook) {
        if (!daybook)
            res.status(404).send("data is not found");
        else
        daybook.daybookId = req.body.daybookId;
        daybook.maleId = req.body.maleId;
        daybook.femaleId = req.body.femaleId;
            daybook.dateOfdaybooking = req.body.dateOfdaybooking;
            daybook.daybookNumber = req.body.daybookNumber;
            daybook.comments = req.body.comments;

            daybook.save().then(daybook => {
                res.json('daybook updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

daybookRoutes.route('/add').post(function(req, res) {
    console.log("inside daybook post function");
    let daybook = new daybookModel(req.body);
    daybook.save()
        .then(daybook => {
            res.status(200).json({'daybook': daybook});
        })
        .catch(err => {
            res.status(400).send('adding daybook failed');
        });
});


module.exports = daybookRoutes;
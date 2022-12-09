const express = require('express');
const app = express();
const saleRoutes = express.Router();

let sale = require('./sale.model');

saleRoutes.route('/').get(function(req, res) {
    sale.find(function(err, sale) {
        if (err) {
            console.log(err);
        } else {
            res.json(sale);
        }
    });
});

saleRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    sale.findById(id, function(err, sale) {
        res.json(sale);
    });
});

saleRoutes.route('/update/:id').post(function(req, res) {
    sale.findById(req.params.id, function(err, sale) {
        if (!sale)
            res.status(404).send("data is not found");
        else
            sale.id = req.body.id;
            sale.birdId = req.body.birdId;
            sale.soldDate = req.body.soldDate;
            sale.soldPrice = req.body.soldPrice;
            sale.clientName = req.body.clientName;
            sale.clientDetails = req.body.clientDetails;
            sale.clientPhoneNo = req.body.clientPhoneNo;

            sale.save().then(sale => {
                res.json('sale updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

saleRoutes.route('/add').post(function(req, res) {
    let sale = new sale(req.body);
    sale.save()
        .then(sale => {
            res.status(200).json({'sale': 'sale bird added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding sale bird failed');
        });
});


module.exports = saleRoutes;
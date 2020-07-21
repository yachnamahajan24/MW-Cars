
var express    = require('express');
const mongoose = require('mongoose');
const models   = require('../models/schema');


//  <<<<<<<<<<<<<<<<<< Cars Api Responses >>>>>>>>>>>>>>>>>>>>

const getCars = (req, res) => {

    models.Cars.find().exec( (err, cardata) => {
        if (err) {
            res.status(404).json(err);
            return;
        }

        res.status(200).json(cardata);

    });
};


const createCar = (req, res) => {

    var img ='default.jpg';

    if (req.body.image) {
        img = req.body.image;

    }

    models.Cars.create({
        company     : req.body.company,
        model       : req.body.model,
        color       : req.body.color,
        description : req.body.description,
        price       : req.body.price,
        image       : img,

    }, (err, cardata) => {

        if (err) {
            res.status(400).json(err);

        } else {
            res.status(201).json(cardata);
        }

    });

};


const getSingleCar =(req, res) => {

    models.Cars.findById(req.params.carID)
         .exec((err, car) => {
            if (!car) {
                return res.status(404).json({"message":"location not found"});

            } else if(err){
                return res.status(404).json(err);
            }
            res.status(200).json(car);
        });

};


const updateCar =(req, res) => {

    if (!req.params.carID) {
        res.status(404).json({"message": "Not found, carID is required"});
        return;
    }

    models.Cars.findById(req.params.carID)
        .exec((err, cardata) => {

            if (!cardata){
                res.json(404).status({"message":"carID not found" });
                return;
            } else if (err){
                res.status(400).json(err);
                return;
            }


            cardata.company     = req.body.company;
            cardata.model       = req.body.model;
            cardata.color       = req.body.color;
            cardata.description = req.body.description;
            cardata.price       = req.body.price;

            cardata.save((err,cardata) => {
                if(err){
                    res.status(404).json(err);

                }else {
                    res.status(200).json(cardata);
                }
            });
        });

};


const deleteCar = (req, res) => {
    const carid = req.params.carID;

    if (carid) {
        models.Cars.findByIdAndRemove(carid)
             .exec((err, cardata) => {
                if (err) {
                    res.status(400).json(err);
                    return;
                }
                res.status(201).json(null);

            });

    } else {
        res.status(404).json({ "message" : "No carID"});
    }
};


//  <<<<<<<<<<<<<<<<<< Contacts Api Responses >>>>>>>>>>>>>>>>>>>>

const getContacts = (req, res) => {

    models.Contacts.find().exec( (err, contacts) => {
        if (err) {
            res.status(404).json(err);
            return;
        }

        res.status(200).json(contacts);

    });
};


const createContact = (req, res) => {

    models.Contacts.create({
        name    : req.body.name,
        email   : req.body.email,
        message : req.body.message

    }, (err, contact) => {

        if (err) {
            res.status(400).json(err);

        } else {
            res.status(201).json(contact);
        }

    });

};

const deleteContact = (req, res) => {
    const contactid = req.params.contactID;

    if (contactid) {
        models.Contacts.findByIdAndRemove(contactid)
             .exec((err, cardata) => {
                if (err) {
                    res.status(400).json(err);
                    return;
                }
                res.status(201).json("Contact deleted");

            });

    } else {
        res.status(404).json({ "message" : "No carID"});
    }
};


module.exports = {
    getCars,
    createCar,
    getSingleCar,
    updateCar,
    deleteCar,
    getContacts,
    createContact,
    deleteContact
};

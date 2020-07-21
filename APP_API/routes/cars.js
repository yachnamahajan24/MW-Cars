
const express  = require('express');
const router   = express.Router();
const ctrlCar  = require('../controllers/car');

// <<<<<<<< Car Routes >>>>>>>>>>>

router.route('/cars')
      .get(ctrlCar.getCars)
      .post(ctrlCar.createCar);

router.route('/cars/:carID')
      .get(ctrlCar.getSingleCar)
      .put(ctrlCar.updateCar)
      .delete(ctrlCar.deleteCar);


// <<<<<<< Contact Routes >>>>>>>>>>>

router.route('/contacts')
      .get(ctrlCar.getContacts)
      .post(ctrlCar.createContact);

router.route('/contacts/:contactID')
      .delete(ctrlCar.deleteContact);

module.exports = router;
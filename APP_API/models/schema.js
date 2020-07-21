
const mongoose = require('mongoose');

var carSchema = new mongoose.Schema({
    company: {
    	type: String,
    	required: true
    },
    model: {
    	type: String,
    	required: true
    },
    color: {
    	type: String,
    	required: true
    },
    description: {
    	type: String,
    	required: true
    },
    price: {
    	type: Number,
    	required: true
    },
    image: {
    	type: String,
    	default: "default.jpg"
    }
});

var contactSchema = new mongoose.Schema({
    name: {
    	type: String,
    	required: true
    },
    email: {
    	type: String,
    	required: true
    },
    message: {
    	type: String,
    	required: true
    }
});


const Cars     = mongoose.model('cars', carSchema);
const Contacts = mongoose.model('contacts', contactSchema);

module.exports = {
    Cars,
    Contacts,
};
//contains all the contact schema
//we need to bring in mongoose here

const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },

    last_name:{
        type: String,
        required: true
    },

    phone:{
        type: String,
        required: true
    }
});

//exporting schemea
const Contact = module.exports = mongoose.model('Contact', ContactSchema);

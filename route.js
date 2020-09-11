//File containing the routing method for the dir

const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//retriving contacts
router.get('/contacts', (req, res, next)=>{
    //logic to get the contacts from the database
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//add contacts
router.post('/contact', (req, res, next)=>{
    //logic for the post contacts into database
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    //inserting the new contact into the database
    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'Failed to add contacts!'});
        }
        else{
            res.json({msg: 'Contact added successfully!'});
        }
    });

});

//delete contacts
router.delete('/contact/:id', (req, res, next)=>{
    //logic for delete contacts
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

//exporting router
module.exports = router;
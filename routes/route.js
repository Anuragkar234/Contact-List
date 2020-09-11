//File containing the routing method for the dir

const express = require('express');
const router = express.Router();

//retriving contacts
router.get('/contacts', (req, res, next)=>{
    res.send('retrieving the contact list');
});

//add contacts
router.post('/contacts', (req, res, next)=>{
    //logic for the post contacts into database
});

//delete contacts
router.delete('/contacts:id', (req, res, next)=>{
    //logic for delete contacts
});

//exporting router
module.exports = router;
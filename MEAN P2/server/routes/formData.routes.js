var express = require('express');
var router = express.Router();

var Contact = require('../models/contact.model');

router.get('/contacts', (req, res)=>{
    Contact.find(function (err, contacts) {
            res.json(contacts);
    })
});

router.post('/addcontact', (req, res)=>{
    var newContact = new Contact();
    newContact.firstName = req.body.firstName;
    newContact.lastName = req.body.lastName;
    newContact.phone = req.body.phone;

    newContact.save(function (err, insertedContact) {
        if (err) {
            console.log("Error in saving contact")
        }
        else {
            res.json(insertedContact);
        }
    })
});

router.delete('/contact/:id', (req,res)=>{
   Contact.remove({_id: req.params.id}, function(err, result){
    if (err) {
        res.send("Error deleting contact");
    } else {
        res.json(result);
    }
   })
    
})
module.exports = router;
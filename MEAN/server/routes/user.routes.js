// To define a route for your API, I take access to Router() method of the express package.
// So import express and initiate router.

var express = require('express');
var router = express.Router();

var User = require('../models/user.model')

// Now create a post method for user registration.

router.post('/register', (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    User.addUser(user, (err, result) => {
        if (err) {
            return res.json({ success: false, message: err })
        } else {
            return res.json({ success: true, message: result })
        }

    });
});

router.post('/login', (req, res) => {
    User.login(req.body.email, req.body.password, (err, result) => {
        if (err) {
            return res.json({ success: false, message: err })
        }
        res.json({ success: true, message: result })
    })
});

module.exports = router;
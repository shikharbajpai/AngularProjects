const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {

    res.send('api works');

});

module.exports = router;


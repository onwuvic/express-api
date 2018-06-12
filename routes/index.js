const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true}));

router.get('/', function(req, res) {
    res.status(200).send('Home Page');
});

router.get('/users', function(req, res) {
    res.status(200).send('Users Page');
});


module.exports = router;
'use strict';

var express = require('express'),
    router = express.Router(),
    Sequelize = require('sequelize');
    
var sequelize = new Sequelize('mysql://root:root@y*6uwNRPRsec@localhost.com:5432/survey');

router.get('/', function (req, res) {
    res.render('Master');
});

router.post('/user', function (req, res) {
    var data = req.body;
    
    
});

module.exports = router;
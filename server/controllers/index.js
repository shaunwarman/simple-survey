'use strict';

var config = require('../../config.json'),
    express = require('express'),
    login = require('../lib/login'),
    router = express.Router();

router.get('/', function (req, res) {
    res.render('Master');
});

router.post('/user', function (req, res) {
    if (req.body.password) {
        
        login.handleAdmin(req, function (error) {
            if (error) {
                res.send(error);
                return;
            }
            req.session.admin = true;
            res.redirect('/admin');
        });
        
    } else {
        
        login.handleUser(req, function (error) {
            if (error) {
                res.send({ error: 'Error entering username and password' });
                return;
            }
            
            res.redirect('/vote');
        });
        
    }
});


module.exports = router;
'use strict';

var async = require('async'),
    config = require('../../config.json'),
    express = require('express'),
    login = require('../lib/login'),
    router = express.Router(),
    sequelizer = require('../lib/sequelizer'),
    uuid = require('node-uuid');

router.get('/', function (req, res) {
    res.render('master');
});

router.get('/admin', function (req, res) {
    if (!req.session.admin) {
        res.redirect('/unauthorized');
        return;
    }
    res.render('master');
});

router.get('/question/add', function (req, res) {
    if (!req.session.admin) {
        res.redirect('/unauthorized');
        return;
    }
    res.send({ 
        success: true, 
        message : '' 
    });
});

router.post('/question/add', function (req, res) {
    if (!req.session.admin) {
        res.redirect('/unauthorized');
        return;
    }
    
    var question_id = uuid.v4();
    var question = req.body.question;
    var options = req.body.options;
    
    sequelizer.Questions.create({
        id: question_id,
        question: question
    }).then(function (result) {

        /**
         * Iterate over options array and save to db
         *
         * @param options the options
         */
        async.each(options, function (option, callback) {
            var answer_id = uuid.v4();

            sequelizer.Answers.create({
                id: answer_id,
                question_id: question_id,
                option: option,
                order: order,
                count: 0
                
            }).then(function () {
                return callback(null, { success: true });
            });
            
            callback(null, { success: true });
        },
            
        /**
         * Final async series callback
         *
         * @param error the error
         * @param result the final result
         */
        function (error, result) {
            if (error) {
                res.send({
                    success: false,
                    message: error
                });
            } else {
                res.send({
                    success: true,
                    message: 'Question added successfully!'
                });
            }
        });
    });
});

router.get('/question/view', function (req, res) {
    res.render('question');
});

router.get('/question/viewall', function (req, res) {
    if (!req.session.admin) {
        res.redirect('/unauthorized');
        return;
    }
   res.render('question'); 
});

router.get('/unauthorized', function (req, res) {
   res.render('unauthorized'); 
});

router.post('/user', function (req, res) {
    if (req.body.username === "admin") {
        
        login.handleAdmin(req, function (error) {
            if (error) {
                res.status(401).send({ error: 'Admin credentials invalid!' });
                return;
            } else {
                req.session.admin = true;
                res.send({ 
                    success: true,
                    redirect: '/admin'
                });
            }
        });
        
    } else {
        
        login.handleUser(req, function (response) {
            if (response.success === false) {
                res.status(404).send({ error: 'Error entering username and password' });
                return;
            }
            res.redirect('/vote');
        });
        
    }
});


module.exports = router;
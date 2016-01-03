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
    if (req.query) {
        var success = req.query.success;
        var message = req.query.message;
        
        res.render('master', { success: success, message: message });
    } else {
        res.render('master');
    }
    
});

router.get('/question/add', function (req, res) {
    if (!req.session.admin) {
        res.redirect('/unauthorized');
        return;
    }
    res.render('question');
});

router.post('/question/add', function (req, res) {
    if (!req.session.admin) {
        res.redirect('/unauthorized');
        return;
    }
    
    var question_id = uuid.v4();
    var question = req.body.question;
    var options = req.body.options.split(",");
    
    sequelizer.Questions.create({
        id: question_id,
        question: question
    }).then(function (result) {

        /**
         * Iterate over options array and save to db
         *
         * @param options the answer options
         */
        async.each(options, function (option, callback) {
            var answer_id = uuid.v4();

            sequelizer.Answers.create({
                id: answer_id,
                question_id: question_id,
                option: option,
                count: 0
                
            }).then(function (result) {
                return callback(null, { success: true });
            });
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
    sequelizer.Questions.findAll({}).then(function (questions) {
        var question_id = questions[0].dataValues.id;
        var question = questions[0].dataValues.question;
        
        sequelizer.Answers.findAll({
            where: {
                question_id: question_id
            }
        }).then(function (options) {
            var options = options;

            res.render('question', { question: question, options: options });
        }).bind(question);
    });
    
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
        
        login.handleUser(req, function (error, response) {
            if (response && response.success === false) {
                res.status(404).send({ error: 'Error entering username and password' });
                return;
            }
            res.redirect('/question/view');
        });
        
    }
});

router.post('/vote', function (req, res) {
    var question = req.body.question;
    var answer = req.body.answer;
    
    
    
    res.render('congrats');
});

module.exports = router;

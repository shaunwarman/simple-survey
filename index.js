'use strict';

// include packages
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');

// start express app
var express = require('express');
var app = express();

// setup middleware chain
app.use(bodyParser());
app.use(multipart());

// set view
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// serve static content
app.use(express.static(__dirname + '/build'));

// setup routes
var routes = require('./server/controllers');
app.use('/', routes);

// start application
console.log("Listening on port: 3000");
app.listen(process.env.PORT || 3000);
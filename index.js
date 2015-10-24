'use strict';

var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');

var express = require('express');
var app = express();

app.use(bodyParser());
app.use(multipart());

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(__dirname + '/build'));

var routes = require('./server/controllers');
app.use('/', routes);

console.log("Listening on port: 3000");
app.listen(process.env.PORT || 3000);
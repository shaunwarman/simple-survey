'use strict';

// include packages
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var sequelizer = require('./server/lib/sequelizer');
var session = require('express-session');
var SequelizeStore = require('express-sequelize-session')(session.Store);

// express setup
var express = require('express');
var app = express();

// setup middleware chain
app.use(bodyParser());
app.use(multipart());

// initialize session
var store = new SequelizeStore(sequelizer.sequelize, 'session');
app.use(session({
    name: 'sid',
    resave: false,
    saveUninitialized: true,
    secret: 'SumeMeRocks',
    store: store
}));

// set view
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// serve static content
app.use(express.static(__dirname + '/build'));

// setup routes
var routes = require('./server/controllers');
app.use('/', routes);

// sync DB to get session setup
sequelizer.sync(function () {
    
    // start application
    console.log("Listening on port: 3000");
    app.listen(process.env.PORT || 3000);
    
});

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Master = React.createClass({
    
    onComponentDiDMount: function () {},
    
    render: function() {
        return (
            <html>
                <head>
                    <title>Test title</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="app.css" />
                </head>
                <body>
                <div className="container">
                    <div id="content"></div>
                </div>
                </body>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                <script src="app.js"></script>
            </html>
        );
    }
});

module.exports = Master;
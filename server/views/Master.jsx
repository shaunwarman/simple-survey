'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Master = React.createClass({
    
    onComponentDiDMount: function () {},
    
    render: function() {
        return (
            <html>
                <head><title>Test title</title></head>
                <body>
                    <div id="content"></div>
                </body>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/js/materialize.min.js"></script>
                <script src="app.js"></script>
            </html>
        );
    }
});

module.exports = Master;
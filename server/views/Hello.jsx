'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function() {
        return <div>Hello World, server here!</div>;
    }
});

module.exports = HelloWorld;
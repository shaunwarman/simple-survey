"use strict";

var React = require("react");

var Unauthorized = React.createClass({

    render: function () {

        return (
            <div>Authorization failed: User credentials invalid!</div>
        );
    }
});

module.exports = Unauthorized;
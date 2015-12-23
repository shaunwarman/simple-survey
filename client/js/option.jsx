"use strict";

var React = require("react");

var Option = React.createClass({

    getInitialState: function () {
        return {
            option: null
        }
    },

    handleOption: function (event) {
        var choice = this.props.choice;
        var content = event.target.value;
        
        this.props.method(choice, content);
        this.setState({ option: content});
    },

    render: function () {
        var title = "Option " + this.props.choice;

        return (
            <div>
                <div className="row col-xs-12 option">
                    <label for="option">{title}</label>
                </div>
                <div className="row col-xs-12">
                    <input type="text" className="form-control" placeholder="Option"
                           value={this.state.option} onChange={this.handleOption} />
                </div>
            </div>
        );
    }
});

module.exports = Option;
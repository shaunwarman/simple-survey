"use strict";

var React = require("react");
var Question = require("./question");
var Option = require("./option");
var $ = require("./external/jquery.min");

var AddQuestion = React.createClass({

    getInitialState: function () {
        return {
            question: null,
            options: []
        }
    },
    
    componentDidMount: function () {
        this.handleOptions(window._options || []);
    },

    handleOption: function (choice, content) {
        var options = this.state.options;
        options[choice-1] = content;

        this.setState({ options: options });
    },

    handleSubmit: function (event) {
        event.preventDefault();

        var formData = new FormData();
        formData.append("question", this.state.username);
        formData.append("options", this.state.options);

        $.ajax({
            type: "POST",
            url: "/vote",
            data: formData,
            contentType: false,
            processData: false,
            timeout: 20000,
            complete: function (response) {
                if (response && response.responseJSON) {
                    window.location = "/congrats";
                }
            }
        });
    },

    handleOptions: function (options) {
        var optionsArray = [];
        
        options.forEach(function (element) {
            var option = '<div>' + element['option'] + '</div>';
            optionsArray.push(option)
        });
        
        this.setState({
            options: optionsArray
        });
    },

    render: function () {
        var question = window._question || "";
        var options = this.state.options || "";
        
        return (
            <div>
                {question};
                {options}
                <button type="submit" className="btn btn-primary option" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
});

module.exports = AddQuestion;
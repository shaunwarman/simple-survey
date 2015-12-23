"use strict";

var React = require("react");
var Question = require("./question");
var Option = require("./option");

var AddQuestion = React.createClass({

    getInitialState: function () {
        return {
            question: null,
            options: []
        }
    },
    
    handleOption: function (choice, content) {
        var options = this.state.options;
        options[choice-1] = content;
        
        this.setState({ options: options });
    },
    
    handleQuestion: function (question) {
        this.setState({
           question: question
        });
    },
    
    handleSubmit: function (event) {
        event.preventDefault();

        var formData = new FormData();
        formData.append("question", this.state.username);
        formData.append("options", this.state.options);

        $.ajax({
            type: "POST",
            url: "/question/add",
            data: formData,
            contentType: false,
            processData: false,
            timeout: 20000,
            complete: function (response) {
                if (response) {
                    window.location = url;
                }
            }
        });
    },

    render: function () {
        return (
            <div>
                <Question method={this.handleQuestion} />
                <Option choice="1" method={this.handleOption} />
                <Option choice="2" method={this.handleOption} />
                <Option choice="3" method={this.handleOption} />
                <Option choice="4" method={this.handleOption} />
                <button type="submit" className="btn btn-primary option" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
});

module.exports = AddQuestion;
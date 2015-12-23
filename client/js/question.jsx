"use strict";

var React = require("react");
var Option = require("./option");

var Question = React.createClass({
    
    getInitialState: function () {
        return {
            question: null
        }
    },

    handleQuestion: function (event) {
        var question = event.target.value;
        
        this.props.method(question);
    },
    
    render: function () {
        return (
            <div>
                <label for="question">Question</label>
                <input type="text" className="form-control" id="question-id" placeholder="Question"
                       value={this.state.question} onChange={this.handleQuestion} />
            </div>
        );
    }
});

module.exports = Question;
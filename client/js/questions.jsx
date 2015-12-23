"use strict";

var React = require("react");

var Questions = React.createClass({

    getInitialState: function () {
        return {
            number: 0,
            questions: []
        }
    },

    addQuestion: function (question) {
        var number = this.state.number++;
        var questions = this.state.questions.push(question);
        
        this.setState({
            number: number,
            questions: question
        });
    },
    
    removeQuestion: function (question) {
        var number = this.state.number--;
        var questions = this.state.questions;
        
        questions.findIndex(function (element, index) {
            
        });

        this.setState({
            number: number,
            questions: question
        });
    },

    render: function () {

        return (
            <form id="admin-form">
                <div className="form-group">
                    <label for="question">Question</label>
                    <input type="text" className="form-control" id="question" placeholder="Question"
                           value={this.state.username} onChange={this.changeUsername} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
});

module.exports = Questions;
"use strict";

var React = require("react");

var Admin = React.createClass({

    getInitialState: function () {
        return {
            questions: 0
        }
    },
    
    addQuestion: function () {
        window.location = "/question/add";
    },

    viewQuestions: function () {
        window.location = "/question/view";
    },

    viewResults: function () {
        window.location = "/question/viewall";
    },

    render: function () {

        return (
            <div>
                <div className="row col-xs-12">
                    <button type="submit" id="addQuestion" className="btn btn-primary admin-btn" onClick={this.addQuestion}>Add Question</button>
                </div>
                <div className="row col-xs-12">
                    <button type="submit" id="viewQuestions" className="btn btn-primary admin-btn" onClick={this.viewQuestions}>View Questions</button>
                </div>
                <div className="row col-xs-12">
                    <button type="submit" id="viewResults" className="btn btn-primary admin-btn" onClick={this.viewResults}>View Results</button>
                </div>
            </div>
        );
    }
});

module.exports = Admin;
'use strict';

var React = require('react');

 var HelloWorld = React.createClass({
    
    getInitialState: function () {
        return {
            username: '',
            password: '',
            response: null
        }
    },
    
    changeUsername: function (event) {
        this.setState({ username: event.target.value });
    },
    
    changePassword: function (event) {
        this.setState({ password: event.target.value });
    },
    
    handleSubmit: function (event) {
        event.preventDefault();
        
        var formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        

        $.ajax({
            type: "POST",
            url: "/user",
            data: formData,
            contentType: false,
            processData: false,
            timeout: 5000,
            complete: function (response) {
                this.setState({ response: response });
            }
        });
    },
    
    render: function () {
        return (
            <form id="user-form">
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" 
                           value={this.state.username} onChange={this.changeUsername} />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" 
                           value={this.state.password} onChange={this.changePassword} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
});

module.exports = HelloWorld;
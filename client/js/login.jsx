"use strict";

var React = require("react");
var $ = require("./external/jquery.min");

var Login = React.createClass({
    
    getInitialState: function () {
        return {
            username: "",
            password: "",
            isAdmin: false,
            response: null
        }
    },
    
    changeUsername: function (event) {
        var username = event.target.value.toLowerCase();
        
        if (username === "admin") {
            this.setState({
                username: event.target.value,
                isAdmin: true
            });
        } else {
            this.setState({ 
                username: event.target.value,
                isAdmin: false
            });
        }
    },
    
    changePassword: function (event) {
        this.setState({ password: event.target.value });
    },
    
    handleSubmit: function (event) {
        event.preventDefault();
        
        var formData = new FormData();
        formData.append("username", this.state.username);
        formData.append("password", this.state.password);
        

        $.ajax({
            type: "POST",
            url: "/user",
            data: formData,
            contentType: false,
            processData: false,
            timeout: 20000,
            complete: function (response) {
                if (response.responseJSON && response.responseJSON.redirect) {
                    var url = response.responseJSON.redirect;
                    window.location = url;
                }
            }
        });
    },
    
    render: function () {
        var password = null;
        
        if (this.state.isAdmin) {
            password = (<div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password"
                                value={this.state.password} onChange={this.changePassword} />
                        </div>
                        );
        }
        
        return (
            <form id="user-form">
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="username" className="form-control" id="username" placeholder="Username" 
                           value={this.state.username} onChange={this.changeUsername} />
                </div>
                {password}
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
});

module.exports = Login;
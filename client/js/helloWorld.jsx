'use strict';

import React from "react";

export default class HelloWorld extends React.Component {
    
    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <span className="btn btn-default btn-file">
                        <input type="file">Choose a file..</input>
                    </span>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
};
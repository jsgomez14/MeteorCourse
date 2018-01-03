import React, {Component} from "react";
import {Link} from "react-router";

export default class Login extends Component{
    render(){
        return (
            <div>
                <h1>Login to Short Lnk</h1>

                Login form here

                <Link to="/signup"> Have an account?</Link>
            </div>
        );
    }
}
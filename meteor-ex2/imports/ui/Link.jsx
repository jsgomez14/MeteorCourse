import React, {Component} from "react";
import { browserHistory } from "react-router";

export default class Link extends Component {

    logout(){
        browserHistory.push("/");
    }

    render(){
        return (
            <div>
                <h1>Links</h1>
                <button onClick={this.logout.bind(this)}>Log out</button>
            </div>
        );
    }
}
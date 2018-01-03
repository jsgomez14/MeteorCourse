import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import { Router, Route, browserHistory } from "react-router";
import Link from "../imports/ui/Link";
import Signup from "../imports/ui/Signup";
import NotFound from "../imports/ui/NotFound";
import Login from "../imports/ui/Login";


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component ={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/links" component={Link}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

Meteor.startup(()=>{
    ReactDOM.render(routes, document.getElementById("app"));
});
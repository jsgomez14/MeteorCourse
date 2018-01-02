import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import {Tracker} from "meteor/tracker";
import Signup from "../imports/ui/Signup";
import Link from "../imports/ui/Link";

Meteor.startup(()=>{
  Tracker.autorun(()=>{
    ReactDOM.render(<Link/>, document.getElementById("app"));
  });
});
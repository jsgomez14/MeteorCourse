import React, {Component} from "react";
import PropTypes from "prop-types";
import {Players} from "../api/players";

export default class Player extends Component{
  render(){
    return (
    <div>
      <p>
        {this.props.player.name+" has "+this.props.player.score+" point(s)."}
      </p>
      <button onClick={()=> Players.update(this.props.player._id,{$inc: {score: 1}})}>+</button>
      <button onClick={()=> Players.update(this.props.player._id,{$inc: {score: -1}})}>-</button>
      <button onClick={()=> Players.remove(this.props.player._id)}>X</button>
    </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}

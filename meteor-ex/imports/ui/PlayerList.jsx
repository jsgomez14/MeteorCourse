import React, {Component} from "react";
import PropTypes from "prop-types";
import Player from "./Player";

export default class PlayerList extends Component{
    render(){
        if(this.props.players.length === 0)
        {
            return <div> There is no players! :(</div>;
        }
        else{
            return this.props.players.map((p)=>{
                return <Player player={p} key={p._id}/>
              });
        } 
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}
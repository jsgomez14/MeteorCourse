import React, {Component} from "react";
import PropTypes from "prop-types";
import Player from "./Player";
import FlipMove from "react-flip-move"

export default class PlayerList extends Component{
    render(){
        if(this.props.players.length === 0)
        {
            return <div className="item"> <p className="item__message">There is no players! :(</p> </div>;
        }
        else{
            return (
                <FlipMove mantainContainerHeight={true}>
                     {this.props.players.map((p)=>{return <Player player={p} key={p._id}/>})}
                </FlipMove>
                );
        } 
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}
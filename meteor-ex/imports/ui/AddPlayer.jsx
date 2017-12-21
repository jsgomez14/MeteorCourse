import React from 'react';
import {Players} from "../api/players";

export default class AddPlayer extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    let playerName = e.target.playerName.value;
    let submit = ()=>{
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
    playerName ? submit() : alert("Invalid input");
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" placeholder= "Player name"/>
          <button>Add Player</button>
        </form>
      </section>
    );
  };
}

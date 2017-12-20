import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import {Tracker} from "meteor/tracker";
import {Players} from "../imports/api/players";
import TitleBar from "../imports/ui/TitleBar";
import AddPlayer from "../imports/ui/AddPlayer";

const renderPlayers = (playersList)=>{
  return playersList.map((p)=>{
    return (
    <div key={p._id}>
      <p>
        {p.name+" has "+p.score+" point(s)."}
      </p>
      <button onClick={()=> Players.update(p._id,{$inc: {score: 1}})}>+</button>
      <button onClick={()=> Players.update(p._id,{$inc: {score: -1}})}>-</button>
      <button onClick={()=> Players.remove(p._id)}>X</button>
    </div>
    );
  });
}

const handleSubmit = (e) =>{
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
};



Meteor.startup(()=>{
  Tracker.autorun(()=>{
    let players = Players.find().fetch();
    let jsx= (
      <div> 
        <TitleBar title="Meteor Score Keep" subtitle="LEL"/>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder= "Player name"/>
          <button>Add Player</button>
        </form>
        <AddPlayer/>
      </div>
      );   
    ReactDOM.render(jsx, document.getElementById("app")); 
  });

/*   Players.insert({
    name: 'Andriu lo tiene chiquito',
    score: 9999999
  }); */
});
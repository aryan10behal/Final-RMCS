import React,{ useState }  from "react";
import {useHistory} from "react-router-dom";


import "./styles-3.css";



function Number_of_players(props) {
  let history = useHistory()
  let { text, players, setPlayers } = props;
  
  return (
    <button
      type="button"
      className="btn btn-secondary btn text-dark font-formatting screen4-boxes-style"
      value={text}
      onClick={event => setPlayers(event.target.value)}
    >
      {props.text}
    </button>
  );
}

export default Number_of_players;

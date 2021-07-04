import React, { useState } from "react";
import {useHistory} from "react-router-dom";

import "./styles-2.css";

function Options(props) {

  let history = useHistory()
  const [players, setPlayers] = useState();
  const [rounds, setRounds] = useState();
  const [roomcode,setRoomcode] = useState();

  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg text-dark Options-Formatting font-formatting" 
      onClick={()=> {
        history.push({
            pathname: props.path,
            state: { 
              username: props.user,
              players: {players},
              rounds: {rounds},
              roomcode: {roomcode}
                    }
        });
      }}
    >
      <i className={props.imgsrc}>{"    " + props.text}</i>
    </button>
  );
}

export default Options;

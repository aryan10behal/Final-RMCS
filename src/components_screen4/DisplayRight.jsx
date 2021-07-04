import React from "react";
import { useState} from "react";
import {useHistory} from "react-router-dom";
import "./styles-4.css";

// const kingImg = require("/images/king.jpeg");
function DisplayRight(props) {

  let history = useHistory();
  
    const [user, setUser] = useState();
    const [players, setPlayers] = useState();
    const [rounds, setRounds] = useState();
    const [roomcode,setRoomcode] = useState();


    const cur_state = {
      username: {user},
      players: {players},
      rounds: {rounds},
      roomcode:{roomcode}
    }  

  return (
    <div className="rightDisplay col-md-6">
      <input
        className="btn btn-primary nameInputP2"
        type="text"
        placeholder="Enter Code"
        onChange={(e) => {
          setUser(props.user);
          setRoomcode(e.target.value);
          console.log(cur_state);
        }}
      />
      <br />
      <button
                type="button"
                className="btn btn-secondary btn text-dark font-formatting screen4-boxes-style"
                onClick={()=> {
                  history.push({
                      pathname: '/Screen5',
                      state: cur_state
                  });
                }}
              >Start Game
              </button>
    </div>
  );
}

export default DisplayRight;

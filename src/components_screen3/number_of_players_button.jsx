import React from "react";
import {useHistory} from "react-router-dom";

import "./styles-3.css";

function Number_of_players(props) {
  let history = useHistory()

  return (
    <button
      type="button"
      className="btn btn-secondary btn text-dark font-formatting screen4-boxes-style"
      onClick={()=> {
        history.push(props.path);
      }}
    >
      {props.text}
    </button>
  );
}

export default Number_of_players;

import React from "react";
import {useHistory} from "react-router-dom";

import "./styles-2.css";

function Options(props) {

  let history = useHistory()

  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg text-dark Options-Formatting font-formatting" onClick={()=> {
        history.push(props.path);
      }}
    >
      <i className={props.imgsrc}>{"    " + props.text}</i>
    </button>
  );
}

export default Options;

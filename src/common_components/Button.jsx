import React from "react";
import {useHistory} from "react-router-dom";

function Button(props) {

let history = useHistory()

  const buttonStyle = {
    padding: props.padding,
    width: props.width,
    borderRadius: props.borderRad,
    margin: props.margin,
    backgroundColor: props.color,
    border: "0px",
    whiteSpace: "normal"
  };

  const textStyle = {
    color: props.textColor,
    fontSize: props.fontSize
  };

  const iconStyle = {
    color: props.iconColor
  };

  if (props.icon === "") {
    return (
      <button type="button" className="btn btn-primary" style={buttonStyle} onClick={()=> {
        history.push(props.path);
      }}>
        <span className="butText" style={textStyle}>
          {props.text}
        </span>
      </button>
    );
  } else {
    return (
      <button type="button" className="btn btn-primary" style={buttonStyle}>
        <i style={iconStyle} className={props.icon + " icon"}>
          {" "}
        </i>
        <span className="butText" style={textStyle}>
          {props.text}
        </span>
      </button>
    );
  }
}

export default Button;

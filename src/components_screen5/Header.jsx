import React from "react";
import "./styles-5.css";



function Header(props) {
  return (
    <div className="headerGame container-fluid row">
      <div className="col-md-6 cols">
        <p className="HeaderContent1">Round # : {props.roundNumber} </p>
      </div>
      <div className="col-md-6 cols">
        <p className="HeaderContent2">Game code : {props.gameCode} </p>
      </div>
    </div>
  );
}

export default Header;

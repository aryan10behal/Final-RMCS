import React from "react";
import "./styles-5.css";

var roundNumber = 3;
var gameCode = 230301;

function Header() {
  return (
    <div className="headerGame container-fluid row">
      <div className="col-md-6 cols">
        <p className="HeaderContent1">Round : {roundNumber} </p>
      </div>
      <div className="col-md-6 cols">
        <p className="HeaderContent2">Game code : {gameCode} </p>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import UserDisplay from "./UserDisplay";
import "./styles-5.css";

function GameDisplay() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 cols">
          <UserDisplay type="left" />
        </div>
        <div className="col-md-6 cols">
          <UserDisplay type="right" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 cols">
          <UserDisplay type="left" />
        </div>
        <div className="col-md-6 cols">
          <UserDisplay type="right" />
        </div>
      </div>
    </div>
  );
}
export default GameDisplay;

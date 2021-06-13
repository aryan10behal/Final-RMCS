import React from "react";
import UserDisplay from "./UserDisplay";
import "./styles-5.css";

function GameDisplay() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 cols">
          <UserDisplay type="left" />
        </div>
        <div class="col-md-6 cols">
          <UserDisplay type="right" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 cols">
          <UserDisplay type="left" />
        </div>
        <div class="col-md-6 cols">
          <UserDisplay type="right" />
        </div>
      </div>
    </div>
  );
}
export default GameDisplay;

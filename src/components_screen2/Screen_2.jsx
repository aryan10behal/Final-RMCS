import React from "react";
import Options from "./gameOptions";
import TopBar from "../common_components/topBar";
import BottomBar from "../common_components/bottomBar";
import "./styles-2.css";

function Screen_2() {
  return (
    <div>
      <TopBar text="Sign In" />
      <div className="row height-size">
        <div className="col-6">
          <div className="top-left">
            <Options 
            imgsrc="fas fa-gamepad" text="Create Game" path="/Screen3"/>
          </div>
        </div>
        <div className="col-6">
          <div className="top-right">
            <Options imgsrc="fas fa-user-friends" text="Join Game" path="/Screen4"/>
          </div>
        </div>
      </div>
      <div className="row height-size">
        <div className="col-6">
          <div className="bottom-left">
            <Options imgsrc="fas fa-book" text="How to Play" path=""/>
          </div>
        </div>
        <div className="col-6">
          <div className="bottom-right">
            <Options imgsrc="fas fa-info-circle" text="About" path=""/>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default Screen_2;

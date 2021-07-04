import React,{ useEffect, useState } from "react";
import Options from "./gameOptions";
import TopBar from "../common_components/topBar";
import BottomBar from "../common_components/bottomBar";
import "./styles-2.css";

import { useLocation } from "react-router-dom";

function Screen_2() {

  const location = useLocation();

  const [user, setUser] = useState();

  useEffect(() => {
    setUser(location.state.username.username);  // username
    console.log(location.state); 
 }, []);

   


  return (
    <div>
      <TopBar text="Sign In" />
      <div className="row height-size">
        <div className="col-6">
          <div className="top-left">
            <Options 
            imgsrc="fas fa-gamepad" text="Create Game" path="/Screen3" user={user}/>
          </div>
        </div>
        <div className="col-6">
          <div className="top-right">
            <Options imgsrc="fas fa-user-friends" text="Join Game" path="/Screen4" user={user}/>
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

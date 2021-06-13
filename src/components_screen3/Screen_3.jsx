import React from "react";
import NumberOfPlayers from "./number_of_players_button";
import TopBar from "../common_components/topBar";
import BottomBar from "../common_components/bottomBar";
import JoinCode from "./joiningCode";
import "./styles-3.css";
import DropDownMenu from "./dropDown";
import "react-dropdown/style.css";

function Screen_3() {
  return (
    <div>
      <TopBar text="Sign In" />
      <div className="row">
        <div className="col-md-4">
          <img
            className="screen4-img-formatting "
            src="https://i.pinimg.com/originals/fd/8a/e9/fd8ae96e431f55449d0bd87db08a82a8.jpg"
            alt="raja ji ki tasveer"
          />
        </div>
        <div className="row col-md-8 screen4-text-formatting">
          <h1 className="row col-md-12">-->> Choose the Number of Players......</h1>
          <br />
          <br />
          <br />
          <div className="col-md-4">
            <NumberOfPlayers text="4" path=""/>
          </div>
          <div className="col-md-4">
            <NumberOfPlayers text="5" path=""/>
          </div>
          <div className="col-md-4">
            <NumberOfPlayers text="6" path=""/>
          </div>
          <br />
          <br />
          <div className="col-lg-6 font-formatting margins-formatting">
            <h1>-->> Choose number of Rounds</h1>
          </div>
          <div className="col-lg-6 margins-formatting-2">
            <DropDownMenu />
          </div>
          <br />
          <br />
          <br />
          <hr id="eight" />
          <br />
          <div className="col-md-6 margins-formatting">
            <h1>Joining Code</h1>
          </div>
          <div className="col-md-6 margins-formatting">
            <JoinCode text="202124" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-md-12 margins-formatting">
            <NumberOfPlayers text="Start Game" path="/Screen5"/>
          </div>
        </div>
      </div>
      <br />
      <br />
      <BottomBar />
    </div>
  );
}

export default Screen_3;

import React from "react";
import Header from "./Header";
import RightMenu from "./RightMenu";
import GameDisplay from "./GameDisplay";
import "./styles-5.css";

function Screen_5() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 cols">
          <Header />
          <GameDisplay />
        </div>
        <div className="col-md-3 cols">
          <RightMenu />
        </div>
      </div>
    </div>
  );
}

export default Screen_5;

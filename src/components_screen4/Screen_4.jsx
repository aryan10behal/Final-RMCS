import React from "react";

import TopBar from "../common_components/topBar";
import BottomBar from "../common_components/bottomBar";
import DisplayLeft from "./DisplayLeft";
import DisplayRight from "./DisplayRight";
import "./styles-4.css";

function Screen_4() {
  return (
    <section className="main-display">
      <TopBar text="Sign In" />
      <div className="container-fluid">
        <div className="row DisplayCont">
          <DisplayLeft />
          <DisplayRight />
        </div>
      </div>
      <BottomBar />
    </section>
  );
}

export default Screen_4;

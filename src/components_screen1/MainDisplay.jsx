import React from "react";
import DisplayLeft from "./DisplayLeft";
import DisplayRight from "./DisplayRight";

import "./styles-1.css";

function MainDisplay() {
  return (
    <section className="main-display">
      <div className="container-fluid">
        <div className="row DisplayCont">
          <DisplayLeft />
          <DisplayRight />
        </div>
      </div>
    </section>
  );
}

export default MainDisplay;

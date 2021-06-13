import React from "react";
import Button from "../common_components/Button.jsx";
import "./styles-4.css";

// const kingImg = require("/images/king.jpeg");
function DisplayRight() {
  return (
    <div className="rightDisplay col-md-6">
      <input
        className="btn btn-primary nameInputP2"
        type="text"
        placeholder="Enter Code"
      />
      <br />
      <Button
        type="circle"
        color="#E2B8F0"
        width=""
        text="Join"
        borderRad="50%"
        icon=""
        iconColor=""
        padding="7%"
        margin="20% 0"
        textColor="black"
        fontSize="2rem"
        path="/Screen5"
      />
    </div>
  );
}

export default DisplayRight;

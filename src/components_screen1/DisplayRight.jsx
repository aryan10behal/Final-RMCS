import React from "react";
import Button from "../common_components/Button.jsx";

import "./styles-1.css";
/*import kingImg from "../images/king.jpeg";*/


function DisplayRight() {
  return (
    <div className="rightDisplay col-md-6">
      <div className="card">
        <div className="card-body">
          <div className="cardHeadingName">
            <input
              className="btn btn-primary nameInput"
              type="text"
              placeholder="Type Your Name Here"
            />
            <br />
            <Button
              type=""
              color="white"
              width=""
              text=""
              borderRad=""
              icon="fas fa-caret-square-left fa-2x"
              iconColor="black"
              padding=""
              margin="0 4% 0 0"
              textColor=""
              fontSize=""
              path=""
            />
            <img src="https://previews.123rf.com/images/tigatelu/tigatelu1307/tigatelu130700242/21063052-kid-cartoon-with-king-costume.jpg" className="kingImg" alt="king-img" />

            <Button
              type=""
              color="white"
              width=""
              text=""
              borderRad=""
              icon="fas fa-caret-square-right fa-2x"
              iconColor="black"
              padding=""
              margin="0 5% 0 0"
              textColor=""
              fontSize=""
              path=""
            />
            <Button
              type="circle"
              color="#E2B8F0"
              width=""
              text={["Choose ", <br />, "Avatar"]}
              borderRad="50%"
              icon=""
              iconColor=""
              padding="5%"
              margin="4% 0 0 4%"
              textColor="black"
              fontSize="1.3rem"
              path=""
            />
            <br />
            <Button
              type=""
              color="#E2B8F0"
              width="60%"
              text="Play As Guest"
              borderRad="15px"
              icon=""
              iconColor=""
              padding="2%"
              margin="5% 0 0 0"
              textColor="black"
              fontSize="2rem"
              path="/Screen2"
            />
            <br />
            <Button
              type=""
              color="#E2B8F0"
              width=""
              text="Sign in using Google"
              borderRad="15px"
              icon="fab fa-google fa-lg"
              iconColor="white"
              padding="4%"
              margin="7% 0 0 0"
              textColor="black"
              fontSize="1.3rem"
              path=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayRight;

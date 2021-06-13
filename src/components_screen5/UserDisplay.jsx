import React from "react";
import "./styles-5.css";
/*const userImg = require("/images/king.jpeg"); */

function UserDisplay(props) {
  if (props.type === "left")
    return (
      <div className="container-fluid userDiv">
        <img className="usrImgLeft" src="https://previews.123rf.com/images/tigatelu/tigatelu1307/tigatelu130700242/21063052-kid-cartoon-with-king-costume.jpg" alt="UserImage" />
        <div class="card cardLeft">
          <div class="card-body">{props.name}</div>
        </div>
      </div>
    );
  else {
    return (
      <div className="container-fluid userDiv">
        <div class="card cardRight">
          <div class="card-body">{props.name}</div>
        </div>
        <img className="usrImgRight" src="https://previews.123rf.com/images/tigatelu/tigatelu1307/tigatelu130700242/21063052-kid-cartoon-with-king-costume.jpg" alt="UserImage" />
      </div>
    );
  }
}

export default UserDisplay;

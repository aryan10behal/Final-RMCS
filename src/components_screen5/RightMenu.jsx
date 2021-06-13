import React from "react";
import Button from "../common_components/Button";
import "./styles-5.css";

function RightMenu() {
  return (
    <div className="rightMenu">
      <Button
        type="circle"
        color="#E2B8F0"
        width=""
        text="Chat"
        borderRad="50%"
        icon=""
        iconColor=""
        padding="10%"
        margin="20% 0 0 0"
        textColor="black"
        fontSize="2.5rem"
        path=""
      />
      <br />
      <Button
        type="circle"
        color="#E2B8F0"
        width=""
        text={["Score ", <br />, "Table"]}
        borderRad="60%"
        icon=""
        iconColor=""
        padding="9%"
        margin="9% 0 0 0"
        textColor="black"
        fontSize="2rem"
        path=""
      />
      <br />
      <Button
        type="circle"
        color="#E2B8F0"
        width=""
        text=""
        borderRad="50%"
        icon="fas fa-microphone-slash fa-2x"
        iconColor="black"
        padding="5%"
        margin="20% 15% 0 4%"
        textColor="black"
        fontSize="2rem"
        path=""
      />
      <Button
        type="circle"
        color="#E2B8F0"
        width=""
        text=""
        borderRad="50%"
        icon="fas fa-video-slash fa-2x"
        iconColor="black"
        padding="6%"
        margin="20% 0 0 15%"
        textColor="black"
        fontSize="1.3rem"
        path=""
      />
      <br />
      <hr />
      <Button
        type="circle"
        color="#E2B8F0"
        width=""
        text="Exit"
        borderRad="50%"
        icon=""
        iconColor=""
        padding="5%"
        margin="10% 0 7% 4%"
        textColor="black"
        fontSize="1.3rem"
        path="/Screen2"
      />
    </div>
  );
}

export default RightMenu;

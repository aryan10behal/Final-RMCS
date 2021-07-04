import React from "react";
import Button from "../common_components/Button";
import {useHistory} from "react-router-dom";
import "./styles-5.css";

function RightMenu(props) {

  let history = useHistory();

  const textStyle = {
    color: "black",
    fontSize: "2.5rem"
  };

  const buttonStyle = {
    padding: "10%",
    borderRadius: "50%",
    margin: "20% 0 0 0",
    backgroundColor: "#E2B8F0",
    border: "0px",
    whiteSpace: "normal"
  };

  console.log(props.players);
  console.log(props.roundNumber);
  console.log(props.gameCode);
  console.log(props.user);
  return (
    <div className="rightMenu">


      {/* <Button
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
        path="/client"
      /> */}


      <button type="button" className="btn btn-primary" style={buttonStyle} 
      onClick={()=> {
                  history.push({
                      pathname: '/Client',
                      state: {  username: props.user,
                                roomcode: props.gameCode,
                              }
                  });
                }}>
        <span className="butText" style={textStyle}>
          Chat
        </span>
      </button>
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

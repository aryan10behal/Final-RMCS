import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./client.css";
import { useLocation } from "react-router-dom";

let socket;
const CONNECTION_PORT = "localhost:8000/";

function client() {
  // Before Login
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");

  // After Login
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const location = useLocation();


  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);


    useEffect(()=>{

    },[])


  useEffect(() => {
    console.log(location.state);
      setRoom(location.state.roomcode);
      setUserName(location.state.username.user);
      socket.emit("join_room", room);
    socket.on("receive_message", (data) => {
      setMessageList([...messageList, data]);
    });
  });

  console.log(userName);

  const connectToRoom = () => {
    console.log(room);
    setLoggedIn(true);
  };

  const sendMessage = async () => {
    let messageContent = {
      room: room,
      content: {
        author: userName,
        message: message,
      },
    };

    await socket.emit("send_message", messageContent);
    setMessageList([...messageList, messageContent.content]);
    setMessage("");
    document.getElementById("chat-text-area").value = "";
  };

  return (
    <div className="App">
        <div className="chatContainer">
          <div className="messages">
            {messageList.map((val, key) => {
              return (
                <div
                  className="messageContainer"
                  id={val.author == userName ? "You" : "Other"}
                >
                  <div className="messageIndividual">
                    {val.author}: {val.message}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="messageInputs">
            <input
              type="text"
              placeholder="Message..."
              id ="chat-text-area"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button onClick={sendMessage }>Send</button>
          </div>
        </div>
    </div>
  );
}

export default client;

import React,{ useEffect, useState }  from "react";
import Header from "./Header";
import RightMenu from "./RightMenu";
import GameDisplay from "./GameDisplay";
import "./styles-5.css";
import { useLocation } from "react-router-dom";


function Screen_5() {
  const location = useLocation();
  const [user, setUser] = useState();
  const [player, setPlayer] = useState(4);
  const [rounds,setRounds] = useState(4);
  const [roomcode, setRoomCode] = useState("  ");

  useEffect(() => {
      console.log(location.state); 
     setUser(location.state.username);
     setPlayer(location.state.players.players);  // # of players..... location.state.players is object but location.state.players.players is string.
     setRounds(location.state.rounds.rounds);  // # of rounds
     setRoomCode(location.state.roomcode.roomcode); // roomcode
 }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 cols">
          <Header roundNumber={rounds} gameCode={roomcode}/>
          <GameDisplay />
        </div>
        <div className="col-md-3 cols">
          <RightMenu user={user} roundNumber={rounds} gameCode={roomcode} players={player}/>
        </div>
      </div>
    </div>
  );
}

export default Screen_5;

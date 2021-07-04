import React,{ useState,useEffect } from "react";
import NumberOfPlayers from "./number_of_players_button";
import TopBar from "../common_components/topBar";
import BottomBar from "../common_components/bottomBar";
import JoinCode from "./joiningCode";
import "./styles-3.css";
import DropDownMenu from "./dropDown";
import "react-dropdown/style.css";
import {useHistory,useLocation } from "react-router-dom";



/*random code generator*/  
function makeid(length) {
  var result           = '';
  var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}



/*-----------------------------------------*/
function Screen_3() {
    let history = useHistory();
    const location = useLocation();


    const [players, setPlayers] = useState();
    const [rounds, setRounds] = useState();
    const [roomcode,setRoomcode] = useState();
    const [user, setUser] = useState();
    
    useEffect(() => {
      setUser(location.state.username);  // username
      setRoomcode(makeid(5));
      console.log(location.state);
      }, []);
      
      const cur_state = {
        username: {user},
        players: {players},
        rounds: {rounds},
        roomcode:{roomcode}
      }

      console.log(cur_state);
    
  return (
    <div>
      <TopBar text="Sign In" />
      <div className="row">
        <div className="col-md-4">
          <img
            className="screen4-img-formatting "
            src="https://i.pinimg.com/originals/fd/8a/e9/fd8ae96e431f55449d0bd87db08a82a8.jpg"
            alt="raja ji ki tasveer"
          />
        </div>
        <div className="row col-md-8 screen4-text-formatting">
          <h1 className="row col-md-12">-->> Choose the Number of Players......</h1>
          <br />
          <br />
          <br />
          <div className="col-md-4">
            <NumberOfPlayers text="4" players={players} setPlayers={setPlayers}/>
          </div>
          <div className="col-md-4">
            <NumberOfPlayers text="5" players={players} setPlayers={setPlayers}/>
          </div>
          <div className="col-md-4">
            <NumberOfPlayers text="6" players={players} setPlayers={setPlayers}/>
          </div>
          <br />
          <br />
          <div className="col-lg-6 font-formatting margins-formatting">
            <h1>-->> Choose number of Rounds</h1>
          </div>
          <div className="col-lg-6 margins-formatting-2">
            <DropDownMenu rounds={rounds} setRounds={setRounds} />
          </div>
          <br />
          <br />
          <br />
          <hr id="eight" />
          <br />
          <div className="col-md-6 margins-formatting">
            <h1>Joining Code</h1>
          </div>
          <div className="col-md-6 margins-formatting">
            <JoinCode text={roomcode} />
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-md-12 margins-formatting">
              <button
                type="button"
                className="btn btn-secondary btn text-dark font-formatting screen4-boxes-style"
                onClick={()=> {
                  history.replace({
                      pathname: '/Screen5',
                      state: cur_state
                  });
                }}
              >Start Game
              </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <BottomBar />
    </div>
  );
}

export default Screen_3;

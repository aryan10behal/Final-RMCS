import React,{ useState,useEffect } from "react";
import {useLocation} from "react-router-dom";

import TopBar from "../common_components/topBar";
import BottomBar from "../common_components/bottomBar";
import DisplayLeft from "./DisplayLeft";
import DisplayRight from "./DisplayRight";
import "./styles-4.css";

function Screen_4() {
  const location = useLocation();

  const [user, setUser] = useState();
    useEffect(() => {
      setUser(location.state.username);  // username
      }, []);
      console.log(user);
  return (
    <section className="main-display">
      <TopBar text="Sign In" />
      <div className="container-fluid">
        <div className="row DisplayCont">
          <DisplayLeft />
          <DisplayRight user={user}/>
        </div>
      </div>
      <BottomBar />
    </section>
  );
}

export default Screen_4;

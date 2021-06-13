import React from "react";

function TopBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container-formatting ">
      <b className="navbar-brand top-bar-format">Raja Mantri Chor Sipahi</b>
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link top-bar-format" href="www.google.com">
            <i className="fas fa-user-slash">{"   " + props.text}</i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;

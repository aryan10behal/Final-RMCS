import React from "react";
import "./styles-3.css";

function DropDownMenu(props) {
  return (
    <div class="dropdown ">
      <a
        class="btn btn-secondary text-dark font-formatting screen4-boxes-style dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        No. of Rounds
      </a>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item" href="#">
          4
        </a>
        <a class="dropdown-item" href="#">
          5
        </a>
        <a class="dropdown-item" href="#">
          6
        </a>
      </div>
    </div>
  );
}
export default DropDownMenu;

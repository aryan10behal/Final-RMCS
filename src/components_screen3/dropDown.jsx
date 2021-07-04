import React, {useState} from "react";
import "./styles-3.css";

function DropDownMenu(props) {

  let { rounds, setRounds } = props;

  function handleChange(event){
      setRounds(event.target.value)
  }
  
  return (
    <select className="btn btn-secondary dropdown-toggle text-dark font-formatting screen4-boxes-style" name='option' onChange={handleChange}>
    <option value="4">4</option>
    <option value="6">6</option>
    <option value="10">10</option>
</select>
  );
}
export default DropDownMenu;

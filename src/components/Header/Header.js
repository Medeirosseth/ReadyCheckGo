import React from "react"
import './header.css'

function Header(){
  return (
    <div className="header">
      <h1>
        <span className="red bounce" >THINGS I </span> 
        <span className="yellow" > NEED TO </span> 
        <span className="green" > GET DONE TODAY</span>
      </h1>
    </div>
  );
}

export default Header;
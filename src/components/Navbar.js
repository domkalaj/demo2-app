import React from 'react'
import logo from "../images/Logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="AirBnb clone app logo" alt="logo" />
    </nav>
  );
}

export default Navbar
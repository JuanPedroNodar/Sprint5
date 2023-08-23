import React, { useState } from "react";
import "./Navbar.css";
import Navlinks from "./Navlinks";
import Navicon from "./Navicon";

function Navbar() {
  return (
    <>
      <nav className="navBar">
        <Navicon imagen="/logo.svg" />
        <Navlinks />
      </nav>
    </>
  );
}

export default Navbar;

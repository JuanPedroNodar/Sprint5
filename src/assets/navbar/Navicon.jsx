import React, { useState } from "react";
import "./Navicon.css";

function Navicon(props) {
  return (
    <>
      <div className="navImage">
        <img src={props.imagen} className="imgNavbar" />
      </div>
    </>
  );
}

export default Navicon;

import React, { useState } from "react";
import "./Firstpart.css";

function Firstpart(props) {
  return (
    <>
      <div className="firstPart">
        <img src={props.imagen} className="firstPartImg" />
        <h1>{props.titulo}</h1>
        <p>{props.texto}</p>
        <button>{props.textoBoton}</button>
      </div>
    </>
  );
}

export default Firstpart;

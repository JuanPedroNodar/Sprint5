import React, { useState } from "react";
import "./Imagenconparrafo.css";

function Imagenconparrafo(props) {
  return (
    <>
      <div className="imgPh">
        <img src={props.icono} />
        <p>{props.texto}</p>
      </div>
    </>
  );
}

export default Imagenconparrafo;

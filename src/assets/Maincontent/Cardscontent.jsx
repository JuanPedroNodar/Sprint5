import React, { useState } from "react";
import "./Cardscontent.css";

function Cardscontent(props) {
  return (
    <>
      <div className="cardWithImg">
        <img src={props.imagen} className="imgInsideCard" />
        <h4>{props.subtitulo}</h4>
        <p>{props.texto}</p>
      </div>
    </>
  );
}

export default Cardscontent;

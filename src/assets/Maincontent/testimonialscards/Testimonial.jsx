import React, { useState } from "react";
import "./Testimonial.css";

function Testimonial(props) {
  return (
    <div className="testimonialCard">
      <p>{props.texto}</p>
      <div className="perfilTestimonials">
        <img src={props.imgPerfil} className="imgPhoto" />
        <div className="nameJobTestimonials">
          <h5>{props.nombre}</h5>
          <div className="job">{props.puesto}</div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

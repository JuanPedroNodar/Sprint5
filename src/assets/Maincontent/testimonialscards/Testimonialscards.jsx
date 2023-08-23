import React, { useState } from "react";
import "./Testimonialscards.css";
import Testimonial from "./Testimonial";
import Perfil1 from "../../../../public/profile-1.jpg";
import Perfil2 from "../../../../public/profile-2.jpg";
import Perfil3 from "../../../../public/profile-3.jpg";
import comillas from "../../../../public/bg-quotes.png";

function Testimonialscards() {
  return (
    <>
      <div className="testimonialsWithBg">
        <div className="comillas">
          <img src={comillas} />
        </div>
        <div className="allTestimonials">
          <Testimonial
            texto="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            imgPerfil={Perfil1}
            nombre="Satish Pastel"
            puesto="Founder & CEO, Huddle"
          />
          <Testimonial
            texto="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            imgPerfil={Perfil2}
            nombre="Bruce McKenzie"
            puesto="Founder & CEO, Huddle"
          />
          <Testimonial
            texto="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            imgPerfil={Perfil3}
            nombre="Iva Boyd"
            puesto="Founder & CEO, Huddle"
          />
        </div>
      </div>
    </>
  );
}

export default Testimonialscards;

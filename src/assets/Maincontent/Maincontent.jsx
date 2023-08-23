import React, { useState } from "react";
import Firstpart from "./Firstpart";
import Secondpart from "./Secondpart";
import Thirdpart from "./Thirdpart";
import Testimonialscards from "./testimonialscards/Testimonialscards";

function Maincontent() {
  return (
    <>
      <Firstpart
        imagen="/illustration-intro.png"
        titulo="All your files in one secure location, accessible anywhere"
        texto="Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
        textoBoton="Get Started"
      />
      <Secondpart />
      <Thirdpart />
      <Testimonialscards />
    </>
  );
}

export default Maincontent;

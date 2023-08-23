import React, { useState } from "react";
import Cardscontent from "./Cardscontent";
import "./Secondpart.css";
import icon1 from "/icon-access-anywhere.svg";
import icon2 from "/icon-security.svg";
import icon3 from "/icon-collaboration.svg";
import icon4 from "/icon-any-file.svg";

function Secondpart() {
  return (
    <>
      <div className="cardsAllSection">
        <div className="cardsRow">
          <Cardscontent
            imagen={icon1}
            subtitulo="Access your files, anywhere"
            texto="The ability to use a smartphone, tablet or computer to access your account means your files follow you everywhere."
          />
          <Cardscontent
            imagen={icon3}
            subtitulo="Real-time collaboration"
            texto="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
          />
        </div>
        <div className="cardsRow">
          <Cardscontent
            imagen={icon2}
            subtitulo="Security you can trust"
            texto="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
          />
          <Cardscontent
            imagen={icon4}
            subtitulo="Store any type of file"
            texto="Whether you're sharing holidays photos or work decuments. Fylo has you covered allowing for all file types to be securely stored and shared."
          />
        </div>
      </div>
    </>
  );
}

export default Secondpart;

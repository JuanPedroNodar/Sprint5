import React, { useState } from "react";
import "./Footer.css";
import Imagenconparrafo from "./Imagenconparrafo";

function Footer() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.includes("@")) {
      setErrorEmail(true);
    } else if (e.target.value.length === 0) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  return (
    <>
      <div className="forposition">
        <div className="entireFooter">
          <img src="/logo.svg" />
          <div className="footerWithoutLogo">
            <div className="infoFylo">
              <div className="location">
                <Imagenconparrafo
                  icono="/icon-location.svg"
                  texto="Lorem ipsim dolor sit amer, consectetur adipiscing elit, sed do eiusmod tempor incidudunt ut labore el dolore magma aliqua"
                />
              </div>
              <div className="footerIcons">
                <Imagenconparrafo
                  icono="/icon-phone.svg"
                  texto="+1-543-3-4567"
                />
                <Imagenconparrafo
                  icono="/icon-email.svg"
                  texto="example@fylo.com"
                />
              </div>
            </div>
            <div className="infoList">
              <div>
                <ul>
                  <li>About Us</li>
                  <li>Jobs</li>
                  <li>Press</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Contact Us</li>
                  <li>Terms</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
            <div className="socialMedia">
              <img src="/logo-facebook.svg" />
              <img src="/logo-twitter.svg" />
              <img src="/logo-instagram.svg" />
            </div>
          </div>
        </div>
        <div className="containerSearchbar">
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sing up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={changeEmail}
            />
            <button onClick={changeEmail} className="submitButton">
              Get started for free
            </button>
          </div>
          {errorEmail && (
            <p className="errorMessage">
              El campo no puede estar vacio y debe contener @.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Footer;

import React, { useState } from "react";
import "./Signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("Debe completar todos los campos.");
    }
  };

  return (
    <>
      <div className="container">
        <form className="imputform">
          <h1>Sign in</h1>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Correo *"
          />

          <input
            type="password"
            value={password}
            placeholder="Contraseña *"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <button className="registerBtn" type="submit" onClick={validateForm}>
            Registrarse ahora
          </button>
        </form>
      </div>
    </>
  );
}

export default Signin;

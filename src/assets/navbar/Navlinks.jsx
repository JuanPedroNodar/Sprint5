import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navlinks.css";

function Navlinks() {
  return (
    <>
      <div className="linksnavwrapping">
        <a>Features</a>
        <a>Team</a>
        <Link to={"/Signin"} className="signin">
          Sign In
        </Link>
      </div>
    </>
  );
}

export default Navlinks;

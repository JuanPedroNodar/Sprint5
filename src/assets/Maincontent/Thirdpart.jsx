import React, { useState } from "react";
import "./Thirdpart.css";
import icon from "/icon-arrow.svg";

function Thirdpart() {
  return (
    <>
      <div className="Thirdpart">
        <img src="/illustration-stay-productive.png" className="stayPrdImg" />
        <div className="textThirdpart">
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all your files storahe needs.
          </p>
          <p>
            Secureky share files and folders with friends, family and colleagues
            dor live collaboration. No email attachments required.
          </p>
          <span href="" className="fyloLink">
            See how Fylo works <img src={icon} alt="" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Thirdpart;

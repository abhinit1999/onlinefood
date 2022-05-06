import React from "react";
import "./style.css";
import logoImg from "./logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <div>
        <img src={logoImg} alt="logoImg" />

        <span>
          <b>Taste</b>
        </span>

        <p>
          <b>Resturant & BBQ</b>
        </p>
      </div>
    </div>
  );
};

export default Logo;

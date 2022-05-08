import React from "react";
import "./style.css";
import logoImg from "./logo.png";

const Logo = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logoImg} alt="logoImg" />

        {/* <span>
          <b>Taste</b>
        </span>

        <p>
          <b>Resturant & BBQ</b>
        </p> */}
      </div>
      <div className="navBar">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Explor More</a></li>
          <li><a href="">Account</a></li>
        </ul>
      </div>

    </div>
  );
};

export default Logo;

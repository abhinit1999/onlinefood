import React from "react";
import "./style.css";
// import bannerImg from './banner.png';
import Logo from "../../common/Logo";
import l from "./l.webp";
const Banner = () => {
  return (
    <>
      <Logo />
      <header>
        <div className="header_content">
          <div className="content_main">
            <h1> A Very Delicious food for you</h1>
            <p>We made fresh and healthy meals with diffrent recipes</p>
            <button>
              Veiw Menu...<i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <img src={l} className="header_img" alt="BannerImg" />
      </header>
    </>
  );
};

export default Banner;

import React from 'react'
import './style.css';
// import bannerImg from './banner.png';
import Logo from '../../common/Logo';
import l from './l.webp';
const Banner = () => {
  return (
    <header>
        <div className="header_content">
         <Logo/>   
         <div className="content_main">
           <h1>Delicious food for your cravings</h1>  
         <p>We made fresh and healthy meals with diffrent recipes</p>
         <button>
             Veiw Menu <i className="fas fa-long-arrow-alt-right"></i>
         </button>
         
         </div>
        </div>
    <img src={l} className="header_img" alt='BannerImg'/>
    </header>
  );
}

export default Banner;
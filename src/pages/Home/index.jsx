// import { Menu } from "@material-ui/core";
import React from "react";
import CartCountButton from "../../components/common/CartCountButton";
import Footer from "../../components/common/Footer";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../components/common/Menu/data";
import Banner from "../../components/Home/Banner";

const  Home =()=> {
  return (
    <div>
        

     {/* Banner */}
     <Banner/>
{/* Menu' */}
        <Menu list={menuItemsData }/>

{/* Footer; */}
<Footer/>

{/* Cart count Button; */}

<CartCountButton/>








    </div>
  );
}

export default Home;

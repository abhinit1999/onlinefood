import React from "react";
import Footer from "../../components/common/Footer";
import Logo from "../../components/common/Logo";
import Menu from '../../components/common/Menu'
import { menuItemsData } from "../../components/common/Menu/data";
import EmptyCart from "./EmptyCart";
import "./style.css";
const Cart = () => {
  return (
    <>
      <div className="cart_header">
        <Logo />
      </div>
      <EmptyCart/>
      <div className="order">
        <h1 className="order_heading">Your Orders</h1>
        <div className="order_menu">
            <Menu list={menuItemsData} />
        </div>
        <h3 className="total_order">Total Orders</h3>
      </div>

      <Footer />
    </>
  );
};

export default Cart;

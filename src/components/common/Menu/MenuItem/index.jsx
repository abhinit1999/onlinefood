import React from "react";
import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
import "./style.css";
const MenuItem = ({ item }) => {
  const { id, name, info, price, img } = item;
  return (
    <div className="item">
      <img src={img} alt="Img" />
      <div className="item_head_desc">
        <p className="head_desc_name">{name}</p>
        <p className="head_desc_info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item_foot_desc">
        <span className="foot_desc_price">Rs.{price}</span>
        <ButtonAddRemoveItem quantity={10} />
      </div>
    </div>
  );
};

export default MenuItem;

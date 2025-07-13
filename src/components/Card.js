import React from "react";

const Card = ({ image, title, price, description }) => {
  return (
    <div className="menu-items">
      <img className="menu-img" src={image} alt={title} />
      <div className="menu-content">
        <div className="menu-heading">
          <h5>{title}</h5>
          <p className="menu-price">${price}</p>
        </div>
        <p>{description}</p>
        <button className="orderbtn">Order delivery</button>
      </div>
    </div>
  );
};

export default Card;

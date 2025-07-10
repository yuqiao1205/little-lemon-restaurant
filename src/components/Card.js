import React from "react";

const Card = ({ image, name, price, description }) => {
  return (
    <div className="menu-items">
      <img src={image} alt={name} />
      <div className="menu-content">
        <div>
          <h5>{name}</h5>
          <p>${price}</p>
        </div>
        <p>{description}</p>
        <button className="orderbtn">Order Now</button>
      </div>
    </div>
  );
};

export default Card;

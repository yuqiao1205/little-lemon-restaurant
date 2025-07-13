import receipes from "../assets/recipes.js";
import React from "react";
import Card from "./Card";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials</h2>
        <button>Online Menu</button>
      </div>

      {/* Menu items */}
      <div className="cards">
        {receipes.map((recipe) => (
          <Card
            key={recipe.id}
            image={recipe.image}
            title={recipe.title}
            price={recipe.price}
            description={recipe.description}
          />
        ))}
      </div>
    </div>
  );
};
export default Menu;

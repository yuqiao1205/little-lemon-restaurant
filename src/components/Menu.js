import foods from "../assets/foods.js";
import Card from "./Card";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This Weeks Specials!</h2>
        <button>Online Menu</button>
      </div>

      {/* Menu items */}
      <div className="cards">
        {foods.map((food) => (
          <Card
            key={food.id}
            image={food.image}
            title={food.title}
            price={food.price}
            description={food.description}
          />
        ))}
      </div>
    </div>
  );
};
export default Menu;

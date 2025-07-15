import foods from "../assets/foods.js";
import Card from "./Card";

const Menu = () => {
  return (
    <div className="card-container">
      <div className="promotion-header">
        <h2 className="header-title">This Weeks Specials!</h2>
        <button>Online Menu</button>
      </div>

      {/* Card items */}
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

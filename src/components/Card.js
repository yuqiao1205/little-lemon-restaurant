import { Link } from "react-router-dom";
import { FaMotorcycle } from "react-icons/fa";

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
        <Link to="#" className="order-link">
          Order a delivery <FaMotorcycle style={{ marginLeft: "8px" }} />
        </Link>
      </div>
    </div>
  );
};

export default Card;

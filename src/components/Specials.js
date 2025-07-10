import React from 'react';

const Specials = () => (
  <section className="specials">
    <h2>This week’s specials!</h2>
    <button className="menu-button">Online Menu</button>
    <div className="cards">
      <div className="card">
        <img src="https://your-image-url.jpg" alt="Greek salad" />
        <h3>Greek Salad <span className="price">$12.99</span></h3>
        <p>The famous Greek salad of crispy lettuce, peppers, olives and feta.</p>
        <a href="#">Order a delivery 🚚</a>
      </div>
      <div className="card">
        <img src="https://your-image-url.jpg" alt="Bruschetta" />
        <h3>Bruschetta <span className="price">$5.99</span></h3>
        <p>Our Bruschetta is made from grilled bread with garlic and olive oil.</p>
        <a href="#">Order a delivery 🚚</a>
      </div>
      <div className="card">
        <img src="https://your-image-url.jpg" alt="Lemon Dessert" />
        <h3>Lemon Dessert <span className="price">$5.00</span></h3>
        <p>This comes straight from grandma’s recipe book!</p>
        <a href="#">Order a delivery 🚚</a>
      </div>
    </div>
  </section>
);

export default Specials;

import React from 'react';
import heropic from '../assets/food1.jpg'; // Adjust the path as necessary


const Main = () => (
  <section className="hero">
    <div className="hero-text">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <button className="reserve-button">Reserve a Table</button>
    </div>
    <div className="hero-image">
      <img src={heropic} alt="Serving food" />
    </div>
  </section>
);

export default Main;

import React from "react";
import restaurantImage from "../assets/restaurant.jpg"; // Replace with your own image
import lemonIcon from "../assets/Mario and Adrian b.jpg"; // Use your illustration or SVG

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Top Section with Lemon Icon */}
      <section className="about-top">
        <div className="about-text">
          <h1 className="about-title">Little Lemon</h1>
          <h2 className="about-subtitle">Chicago</h2>
          <p className="about-description">
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12–15 items that rotate
            seasonally. The restaurant has a rustic and relaxed atmosphere with
            moderate prices, making it a popular place for a meal any time of
            the day.
          </p>
        </div>
        <div className="about-image">
          <img src={lemonIcon} alt="Lemon Icon" />
        </div>
      </section>

      {/* Bottom Section with Restaurant Image and Story */}
      <section className="about-bottom">
        <div className="about-image">
          <img src={restaurantImage} alt="Little Lemon Restaurant" />
        </div>

        <div className="about-story">
          <h2>Our Story</h2>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant. To craft the menu, Mario relies on family recipes and
            his experience as a chef in Italy. Adrian does all the marketing for
            the restaurant and led the effort to expand the menu beyond classic
            Italian to incorporate additional cuisines from the Mediterranean
            region.
          </p>
        </div>
      </section>
    </div>
  );
}

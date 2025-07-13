import React from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = (props) => {
  return (
    <div>
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Reserve a Table</h1>
        <p>
          Book your table at Little Lemon for an unforgettable dining
          experience.
        </p>
      </section>

      <section
        style={{ padding: "2rem", display: "flex", justifyContent: "center" }}
      >
        <BookingForm
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
          submitForm={props.submitForm}
        />
      </section>

      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>What to Expect</h2>
        <p>
          Our restaurant offers a warm atmosphere with authentic Mediterranean
          cuisine.
        </p>
        <p>We look forward to serving you!</p>
      </section>
    </div>
  );
};

export default BookingPage;

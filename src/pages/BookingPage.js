import React from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = (props) => {
  return (
    <div style={{ backgroundColor: "#495E57" }}>
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ color: "#f4ce14", fontSize: "40px" }}>Reserve a Table</h1>
        <p style={{ color: "white", fontSize: "24px" }}>
          Book your table at Little Lemon for an unforgettable dining
          experience.
        </p>
      </section>

      <section
        style={{ padding: "2rem", display: "flex", justifyContent: "center" }}
      >
        <BookingForm
          availableTimes={props.availableTimes} // props.availableTimes is already the array
          dispatch={props.dispatch}
          submitForm={props.submitForm}
        />
      </section>

      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2 style={{ color: "#f4ce14", fontSize: "36px", fontWeight: "600" }}>
          What to Expect
        </h2>
        <p style={{ color: "white", fontSize: "20px" }}>
          Our restaurant offers a warm atmosphere with authentic Mediterranean
          cuisine.
        </p>
        <p style={{ color: "white", fontSize: "20px" }}>
          We look forward to serving you!
        </p>
      </section>
    </div>
  );
};

export default BookingPage;

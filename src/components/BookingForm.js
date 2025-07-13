import React, { useState } from "react";

const BookingForm = (props) => {
  // State variables for each form field
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
    // Form submission logic will be added later when connecting to API
    // console.log("Form submitted:", { date, time, guests, occasion });
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {props.availableTimes.availableTimes.map((availableTimes) => (
          <option key={availableTimes}>{availableTimes}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        aria-label="On Click"
        type="submit"
        value="Make Your reservation"
        className="btnReceive"
      />
    </form>
  );
};

export default BookingForm;

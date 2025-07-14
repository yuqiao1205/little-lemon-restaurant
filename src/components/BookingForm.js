import React, { useState, useEffect } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Set today's date as minimum date
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const newErrors = {};

    if (!date) newErrors.date = "Date is required";
    else if (date < today) newErrors.date = "Date cannot be in the past";

    if (!time) newErrors.time = "Time is required";
    if (guests < 1 || guests > 10)
      newErrors.guests = "Guests must be between 1 and 10";
    if (!occasion) newErrors.occasion = "Occasion is required";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ date: true, time: true, guests: true, occasion: true });

    if (isFormValid) {
      props.submitForm({ date, time, guests, occasion });
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleDateChange = (value) => {
    setDate(value);
    props.dispatch(value);
  };

  return (
    <header>
      <section className="form-container">
        <form onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>Book a Table</legend>

            <div className="form-group">
              <label htmlFor="res-date">Choose date</label>
              <input
                type="date"
                id="res-date"
                value={date}
                min={today}
                onChange={(e) => handleDateChange(e.target.value)}
                onBlur={() => handleBlur("date")}
                required
              />
              {touched.date && errors.date && (
                <span className="error">{errors.date}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="res-time">Choose time</label>
              <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onBlur={() => handleBlur("time")}
                required
              >
                <option value="">Select a time</option>
                {props.availableTimes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              {touched.time && errors.time && (
                <span className="error">{errors.time}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                onBlur={() => handleBlur("guests")}
                required
              />
              {touched.guests && errors.guests && (
                <span className="error">{errors.guests}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                onBlur={() => handleBlur("occasion")}
                required
              >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
              {touched.occasion && errors.occasion && (
                <span className="error">{errors.occasion}</span>
              )}
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="submit-btn"
                disabled={!isFormValid}
              >
                Make Your Reservation
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;

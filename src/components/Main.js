import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import AboutPage from "../pages/About";

const Main = () => {
  // Seeded random number generator for consistent results
  const seedRandom = (seed) => {
    var m = 2 ** 35 - 1;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = (date) => {
    let result = [];
    let randomTimes = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (randomTimes() < 0.5) result.push(i + ":00");
      if (randomTimes() > 0.5) result.push(i + ":30");
    }
    return result;
  };

  const submitAPI = (formData) => {
    return true;
  };

  // Simulate API call to submit booking data
  // Use useReducer for availableTimes state
  const initializeTimes = { availableTimes: fetchAPI(new Date()) }; // this is object with key availableTimes
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed-booking", { state: formData });
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/bookings"
          element={
            <BookingPage
              availableTimes={availableTimes.availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </main>
  );
};

export default Main;

import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import BookingPage from "../pages/BookingPage";
import { initializeTimes, updateTimes } from "../utils/bookingUtils";

const Main = () => {
  // Use useReducer for availableTimes state
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/bookings"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        {/* Add other routes as needed */}
      </Routes>
    </main>
  );
};

export default Main;

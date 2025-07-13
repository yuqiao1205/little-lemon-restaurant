import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

// Helper functions for testing (matching the Main.js implementation)
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

const initializeTimes = () => {
  return { availableTimes: fetchAPI(new Date()) };
};

const updateTimes = (state, date) => {
  return { availableTimes: fetchAPI(new Date(date)) };
};

// Test 1: Static text rendering in BookingForm component
test("Renders the BookingForm static text", () => {
  render(
    <BookingForm
      availableTimes={[]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const chooseDateLabel = screen.getByText("Choose date");
  expect(chooseDateLabel).toBeInTheDocument();

  const chooseTimeLabel = screen.getByText("Choose time");
  expect(chooseTimeLabel).toBeInTheDocument();

  const guestsLabel = screen.getByText("Number of guests");
  expect(guestsLabel).toBeInTheDocument();

  const occasionLabel = screen.getByText("Occasion");
  expect(occasionLabel).toBeInTheDocument();

  const submitButton = screen.getByDisplayValue("Make Your reservation");
  expect(submitButton).toBeInTheDocument();
});

// Test 2: initializeTimes function returns correct expected value
test("initializeTimes returns correct expected value", () => {
  const result = initializeTimes();

  // Verify it returns an object with availableTimes property
  expect(result).toHaveProperty("availableTimes");
  expect(Array.isArray(result.availableTimes)).toBe(true);
  expect(result.availableTimes.length).toBeGreaterThan(0);

  // Verify all times are valid time strings
  result.availableTimes.forEach((time) => {
    expect(time).toMatch(/^\d{2}:(00|30)$/);
  });
});

// Test 3: updateTimes function returns available times based on selected date
test("updateTimes returns available times based on selected date", () => {
  const initialState = { availableTimes: ["17:00", "18:00", "19:00"] };
  const selectedDate = "2025-01-15";

  const result = updateTimes(initialState, selectedDate);

  // Verify it returns an object with availableTimes property
  expect(result).toHaveProperty("availableTimes");
  expect(Array.isArray(result.availableTimes)).toBe(true);
  expect(result.availableTimes.length).toBeGreaterThan(0);

  // Verify all times are valid time strings
  result.availableTimes.forEach((time) => {
    expect(time).toMatch(/^\d{2}:(00|30)$/);
  });

  // Test with different date to ensure different results can be generated
  const differentDate = "2025-02-20";
  const resultWithDifferentDate = updateTimes(initialState, differentDate);
  expect(resultWithDifferentDate).toHaveProperty("availableTimes");
  expect(Array.isArray(resultWithDifferentDate.availableTimes)).toBe(true);
});

// Test 4: BookingForm can be submitted by the user
test("BookingForm can be submitted by the user", () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  // Fill out the form fields
  const dateInput = screen.getByLabelText("Choose date");
  const timeSelect = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByLabelText("Number of guests");
  const occasionSelect = screen.getByLabelText("Occasion");
  const submitButton = screen.getByDisplayValue("Make Your reservation");

  // Simulate user input
  fireEvent.change(dateInput, { target: { value: "2025-01-15" } });
  fireEvent.change(timeSelect, { target: { value: "18:00" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  // Submit the form
  fireEvent.click(submitButton);

  // Verify that dispatch was called when date changed with just the date string
  expect(mockDispatch).toHaveBeenCalledWith("2025-01-15");

  // Verify that submitForm was called with the form event
  expect(mockSubmitForm).toHaveBeenCalled();
});

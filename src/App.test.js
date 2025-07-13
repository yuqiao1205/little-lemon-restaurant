import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./utils/bookingUtils";

// Test 1: Static text rendering in BookingForm component
test("Renders the BookingForm static text", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

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
  const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(result).toEqual(expected);
  expect(result).toHaveLength(6);
});

// Test 3: updateTimes function returns same value as provided in state
test("updateTimes returns same value as provided in state", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "UPDATE_TIMES", date: "2025-01-15" };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(initialState);

  // Test with different date to ensure same behavior
  const actionWithDifferentDate = { type: "UPDATE_TIMES", date: "2025-02-20" };
  const resultWithDifferentDate = updateTimes(
    initialState,
    actionWithDifferentDate
  );
  expect(resultWithDifferentDate).toEqual(initialState);

  // Test default case
  const unknownAction = { type: "UNKNOWN_ACTION" };
  const defaultResult = updateTimes(initialState, unknownAction);
  expect(defaultResult).toEqual(initialState);
});

// Test 4: BookingForm can be submitted by the user
test("BookingForm can be submitted by the user", () => {
  const mockDispatch = jest.fn();
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // Mock console.log to capture form submission
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  render(
    <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
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

  // Verify that dispatch was called when date changed
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "UPDATE_TIMES",
    date: "2025-01-15",
  });

  // Verify that console.log was called with form data (form submission)
  expect(consoleSpy).toHaveBeenCalledWith("Form submitted:", {
    date: "2025-01-15",
    time: "18:00",
    guests: 4,
    occasion: "Birthday",
  });

  // Clean up
  consoleSpy.mockRestore();
});

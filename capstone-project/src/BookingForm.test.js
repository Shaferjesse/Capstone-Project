import { render, screen } from "@testing-library/react"; 
import BookingForm from './BookingForm'; 
import { initializeTimes, updateTimes } from './main';

beforeEach(() => {
  // Mock fetchAPI to return a fixed array for tests
  window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('Renders the BookingForm label', () => { 
  const availableTimes = ['17:00', '18:00']; 
  render(<BookingForm availableTimes={availableTimes} dispatch={() => {}} submitForm={() => {}} />); 
  const labelElement = screen.getByText(/Full Name/i); // regex ignores the *
  expect(labelElement).toBeInTheDocument(); 
});

test('initializeTimes returns the correct initial array', () => { 
  const expectedValue = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; 
  const initialValue = initializeTimes(); 
  expect(initialValue).toEqual(expectedValue); 
});

test('updateTimes returns the expected value', () => { 
  const initialState = ['17:00', '18:00']; 
  const action = { type: 'UPDATE_TIMES', date: '2026-02-11' }; 
  const result = updateTimes(initialState, action); 
  const expectedValue = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; 
  expect(result).toEqual(expectedValue); 
});



const mockProps = {
  availableTimes: ["17:00", "18:00"],
  dispatch: () => {},
  submitForm: () => {},
};

describe("HTML5 validation attributes", () => {
  test("Full Name input is required", () => {
    render(<BookingForm {...mockProps} />);
    const nameInput = screen.getByLabelText(/full name/i);
    expect(nameInput).toBeRequired();
  });

  test("Email input has type email and is required", () => {
    render(<BookingForm {...mockProps} />);
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toBeRequired();
  });

  test("Date input is required", () => {
    render(<BookingForm {...mockProps} />);
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toBeRequired();
  });

  test("Guests input has min and max attributes", () => {
    render(<BookingForm {...mockProps} />);
    const guestsInput = screen.getByLabelText(/guests/i);
    expect(guestsInput).toHaveAttribute("min");
    expect(guestsInput).toHaveAttribute("max");
  });
});

import { validateEmail, validateName } from "./BookingForm";

describe("JavaScript validation functions", () => {

  test("validateEmail returns true for valid email", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  test("validateEmail returns false for invalid email", () => {
    expect(validateEmail("invalid-email")).toBe(false);
  });

  test("validateName returns true for valid name", () => {
    expect(validateName("John Doe")).toBe(true);
  });

  test("validateName returns false for empty name", () => {
    expect(validateName("")).toBe(false);
  });

});
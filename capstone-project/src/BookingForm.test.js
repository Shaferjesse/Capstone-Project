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
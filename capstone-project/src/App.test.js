// src/App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  test("renders the main page without crashing", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Example check: look for a button with "Reserve" text
    const reserveButton = screen.getByRole("button", { name: /reserve/i });
    expect(reserveButton).toBeInTheDocument();
  });

  test("renders the booking page when route is /booking", () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <App />
      </MemoryRouter>
    );

    // Check for BookingForm heading
    const bookingHeading = screen.getByRole("heading", { name: /reserve a table/i });
    expect(bookingHeading).toBeInTheDocument();
  });

  test("renders the confirmation page when route is /confirmed", () => {
    render(
      <MemoryRouter initialEntries={["/confirmed"]}>
        <App />
      </MemoryRouter>
    );

    // Check for ConfirmedBooking heading
    const confirmationHeading = screen.getByRole("heading", { name: /booking confirmed/i });
    expect(confirmationHeading).toBeInTheDocument();
  });
});

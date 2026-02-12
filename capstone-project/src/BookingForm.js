import React, { useState } from "react";

/* ---------- Validation Functions (Step 2 Requirement) ---------- */

export const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const validateName = (name) => {
  return name.trim().length > 0;
};

/* ---------- Helper ---------- */

const formatTime = (time24) => {
  const [hour, minute] = time24.split(":");
  const h = parseInt(hour, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return h12 + ":" + minute + " " + ampm;
};

/* ---------- Component ---------- */

const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(fullName)) {
      setErrorMessage("Please enter a valid name.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (!resDate || !resTime) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setErrorMessage("");

    submitForm({
      fullName,
      email,
      phone,
      resDate,
      resTime,
      guests,
    });
  };

  return (
    <section aria-labelledby="booking-heading">
      <h2 id="booking-heading">Reserve a Table</h2>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <label htmlFor="fullName">Full Name*</label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        {/* Email */}
        <label htmlFor="email">Email*</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Phone */}
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Date */}
        <label htmlFor="resDate">Date*</label>
        <input
          id="resDate"
          type="date"
          value={resDate}
          onChange={(e) => {
            setResDate(e.target.value);
            dispatch({ type: "UPDATE_TIMES", date: e.target.value });
          }}
          required
        />

        {/* Time */}
        <label htmlFor="resTime">Time*</label>
        <select
          id="resTime"
          value={resTime}
          onChange={(e) => setResTime(e.target.value)}
          required
        >
          <option value="">Select time</option>
          {availableTimes?.map((time) => (
            <option key={time} value={time}>
              {formatTime(time)}
            </option>
          ))}
        </select>

        {/* Guests */}
        <label htmlFor="guests">Guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        {/* Error Message */}
        {errorMessage && (
          <p role="alert" style={{ color: "red" }}>
            {errorMessage}
          </p>
        )}

        {/* Submit Button */}
        <button type="submit" aria-label="On Click">
          Reserve
        </button>
      </form>
    </section>
  );
};

export default BookingForm;

import React, { useState } from "react";

const formatTime = (time24) => {
  const [hour, minute] = time24.split(":");
  const h = parseInt(hour, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return h12 + ":" + minute + " " + ampm;
};

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

    if (!fullName || !email || !resDate || !resTime) {
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
    <section>
      <h2>Reserve a Table</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Full Name*
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>

        <label>
          Email*
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Phone
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>

        <label>
          Date*
          <input
            type="date"
            value={resDate}
            onChange={(e) => {
              setResDate(e.target.value);
              dispatch({ type: "UPDATE_TIMES", date: e.target.value });
            }}
          />
        </label>

        <label>
          Time*
          <select value={resTime} onChange={(e) => setResTime(e.target.value)}>
            <option value="">Select time</option>
            {availableTimes?.map((time) => (
              <option key={time} value={time}>
                {formatTime(time)}
              </option>
            ))}
          </select>
        </label>

        <label>
          Guests
          <input
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </label>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <button type="submit">Reserve</button>
      </form>
    </section>
  );
};

export default BookingForm;
import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

// Optional components you mentioned
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

// Step 1: Mock fetchAPI so Time dropdown has options
if (!window.fetchAPI) {
  window.fetchAPI = (date) => {
    return ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];
  };
}

// Reducer for available times
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return window.fetchAPI ? window.fetchAPI(new Date(action.date)) : [];
    default:
      return state;
  }
};

export const initializeTimes = () => {
  return window.fetchAPI ? window.fetchAPI(new Date()) : [];
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // ✅ Async submitForm
  const submitForm = async (formData) => {
    try {
      // Temporary API stub if not defined
      if (!window.submitAPI) window.submitAPI = async () => true;

      const success = await window.submitAPI(formData);
      if (success) {
        navigate("/confirmed");
      } else {
        console.error("Booking submission failed");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CallToAction />
              <Specials />
              <CustomersSay />
              <Chicago />
            </>
          }
        />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;

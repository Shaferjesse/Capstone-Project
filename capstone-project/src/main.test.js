// main.test.js
import { initializeTimes, updateTimes } from "./main"; // adjust path if needed

describe("initializeTimes", () => {
  test("returns an array of times from fetchAPI", () => {
    // Mock fetchAPI
    window.fetchAPI = jest.fn(() => ["17:00", "17:30", "18:00"]);

    const times = initializeTimes();

    expect(times.length).toBeGreaterThan(0);
    expect(times).toContain("17:00");
  });
});

describe("updateTimes reducer", () => {
  test("returns new times array for a given date", () => {
    // Mock fetchAPI
    window.fetchAPI = jest.fn(() => ["17:00", "17:30"]);

    const initialState = [];
    const action = { type: "UPDATE_TIMES", date: "2026-02-11" };
    const newState = updateTimes(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain("17:30");
  });

  test("returns current state if action type is unknown", () => {
    const initialState = ["17:00"];
    const action = { type: "UNKNOWN" };
    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(initialState);
  });
});

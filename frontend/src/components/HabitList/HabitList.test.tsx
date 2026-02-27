import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";
import { HabitList } from "./HabitList";

// 1. Inject a dummy fetch function so Jest has something to spy on!
globalThis.fetch = jest.fn() as any;

const mockHabits = [
  { id: 1, name: "Morning Journaling" },
  { id: 2, name: "Drink Water" },
];

describe("HabitList Component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("displays a loading state initially", () => {
    // 2. Use globalThis instead of window
    jest
      .spyOn(globalThis, "fetch")
      .mockImplementation(() => new Promise(() => {}));

    render(<HabitList />);
    expect(screen.getByText("Loading habits...")).toBeInTheDocument();
  });

  it("fetches and displays habits successfully", async () => {
    jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockHabits,
    } as Response);

    render(<HabitList />);

    const firstHabit = await screen.findByText("Morning Journaling");
    const secondHabit = await screen.findByText("Drink Water");

    expect(firstHabit).toBeInTheDocument();
    expect(secondHabit).toBeInTheDocument();
  });

  it("displays an error message when the API fails", async () => {
    jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: false,
    } as Response);

    render(<HabitList />);

    const errorMessage = await screen.findByRole("alert");
    expect(errorMessage).toHaveTextContent("Failed to fetch habits");
  });
});

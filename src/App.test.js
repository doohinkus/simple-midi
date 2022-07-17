import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("tone", () => {
  return {
    PolySynth: jest.fn().mockImplementation(() => {
      return { toDestination: jest.fn() };
    }),
    Synth: jest.fn().mockImplementation(() => {
      return { toDestination: jest.fn() };
    }),
  };
});

test("renders without crashing", () => {
  render(<App />);
  const linkElement = screen.getByText(/Midi Keyboard/i);
  expect(linkElement).toBeInTheDocument();
});

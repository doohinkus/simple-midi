import React from "react";
import { render, screen } from "@testing-library/react";
import Keyboard from "./Keyboard";

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
  render(<Keyboard keyBoard={null} />);
  //   const linkElement = screen.getByText(/Midi Keyboard/i);
  //   expect(linkElement).toBeInTheDocument();
});

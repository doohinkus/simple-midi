import React from "react";
import { render, screen } from "@testing-library/react";
import Key from ".";
test("renders key", () => {
  class Note {
    getKey() {
      return "mockKey";
    }
  }
  const note = new Note();
  render(<Key note={note} />);
  const linkElement = screen.getByText(/mockKey/i);
  expect(linkElement).toBeInTheDocument();
});

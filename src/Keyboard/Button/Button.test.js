import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";
test("renders child text button", () => {
  const mockChild = "hello";
  const testText = new RegExp(mockChild);

  render(<Button onClick={jest.fn()}>{mockChild}</Button>);
  const linkElement = screen.getByText(testText);
  expect(linkElement).toBeInTheDocument();
});

test("handles button click", () => {
  const mockChild = "hello";
  const mockFn = jest.fn();
  const { getByTestId } = render(
    <Button handleClick={mockFn}>{mockChild}</Button>
  );

  const btn = getByTestId("button");
  fireEvent.click(btn);

  expect(mockFn).toBeCalledTimes(1);
});

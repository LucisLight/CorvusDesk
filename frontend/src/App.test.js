import { render, screen } from "@testing-library/react";

import App from "./App";

// tests that the app renders the CorvusDesk login page
test("renders CorvusDesk owner login page", () => {

  render(
    <App />
  );

  expect(
    screen.getByText(/Owner Login/i)
  ).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText(/Username/i)
  ).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText(/Password/i)
  ).toBeInTheDocument();
});
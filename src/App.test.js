import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Little Lemon header and booking section", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /little lemon/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /book a table/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /reserve/i })).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders the voting app homepage", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /reusable voting widget/i })).toBeInTheDocument();
  expect(screen.getByText(/voting summary/i)).toBeInTheDocument();
});

test("increases the vote count after a user votes", async () => {
  render(<App />);

  await userEvent.click(screen.getByRole("button", { name: /vote for firebase/i }));

  expect(screen.getAllByText("5 votes").length).toBeGreaterThan(0);
});

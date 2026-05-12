import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import VoteSummary from "../components/VoteSummary";

const topItem = {
  id: "react",
  title: "React",
  description: "Reusable user interface library.",
  category: "Frontend Tool",
  imageUrl: "https://example.com/react.jpg",
  votes: 9,
};

test("shows total votes and current leader", () => {
  render(<VoteSummary totalVotes={20} topItem={topItem} onReset={() => {}} />);

  expect(screen.getByText("20 total votes")).toBeInTheDocument();
  expect(screen.getByText(/current leader/i)).toHaveTextContent("React");
});

test("calls onReset when reset button is clicked", async () => {
  const mockReset = vi.fn();

  render(<VoteSummary totalVotes={20} topItem={topItem} onReset={mockReset} />);

  await userEvent.click(screen.getByRole("button", { name: /reset votes/i }));

  expect(mockReset).toHaveBeenCalled();
});

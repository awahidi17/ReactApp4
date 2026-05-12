import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import VoteCard from "../components/VoteCard";

const mockItem = {
  id: "react",
  title: "React",
  description: "Reusable user interface library.",
  category: "Frontend Tool",
  imageUrl: "https://example.com/react.jpg",
  votes: 5,
};

test("renders the voting item details", () => {
  render(<VoteCard item={mockItem} totalVotes={10} onVote={() => {}} />);

  expect(screen.getByText("React")).toBeInTheDocument();
  expect(screen.getByText("Frontend Tool")).toBeInTheDocument();
  expect(screen.getByText("5 votes")).toBeInTheDocument();
  expect(screen.getByText("50% of total")).toBeInTheDocument();
});

test("calls onVote with the correct item id", async () => {
  const mockVote = vi.fn();

  render(<VoteCard item={mockItem} totalVotes={10} onVote={mockVote} />);

  await userEvent.click(screen.getByRole("button", { name: /vote for react/i }));

  expect(mockVote).toHaveBeenCalledWith("react");
});

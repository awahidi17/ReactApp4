# ReactApp4 Voting App

ReactApp4 is a small reusable voting widget application. Users can vote for their favorite technology tools, view live totals, see the current leader, and reset the vote totals.

## Features

- Reusable voting card component
- Reusable voting summary component
- Global state using React Context
- Shared state across multiple components
- Responsive page layout
- React Router navigation
- Unit testing with Vitest and React Testing Library

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Bootstrap
- Vitest
- React Testing Library

## Project Structure

```text
src/
  components/
    Header.tsx
    VoteCard.tsx
    VoteSummary.tsx
  context/
    VoteContext.tsx
  data/
    voteItems.ts
  models/
    VoteItem.ts
  pages/
    About.tsx
    Home.tsx
  tests/
    App.test.tsx
    VoteCard.test.tsx
    VoteSummary.test.tsx


## Assignment Notes

This project demonstrates reusable components, state management across components, and unit testing. The main state is stored in `VoteContext.tsx`, then used by the home page, voting cards, and summary component.

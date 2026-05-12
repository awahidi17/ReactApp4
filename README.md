# ReactApp4 Voting App

Created by Ahmad Wahidi for MWD4C React Development Assignment 4.

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
```

## Installation

```bash
npm install
```

## Run the App

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Run Tests

```bash
npm run test:run
```

## Build

```bash
npm run build
```

## GitHub Push Commands

```bash
git init
git add .
git commit -m "Complete ReactApp4 voting widget assignment"
git branch -M main
git remote add origin https://github.com/awahidi17/ReactApp4.git
git push -u origin main
```

## Assignment Notes

This project demonstrates reusable components, state management across components, and unit testing. The main state is stored in `VoteContext.tsx`, then used by the home page, voting cards, and summary component.

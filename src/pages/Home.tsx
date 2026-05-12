import VoteCard from "../components/VoteCard";
import VoteSummary from "../components/VoteSummary";
import { useVotes } from "../context/VoteContext";

export default function Home() {
  const { items, totalVotes, topItem, voteForItem, resetVotes } = useVotes();

  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <p className="eyebrow">Assignment 4</p>
          <h1>Reusable Voting Widget</h1>
          <p className="hero-text">
            A small React voting app built with reusable components, shared state, and unit tests.
          </p>
        </div>
      </section>

      <section className="container content-section">
        <VoteSummary totalVotes={totalVotes} topItem={topItem} onReset={resetVotes} />

        <div className="vote-grid">
          {items.map((item) => (
            <VoteCard
              key={item.id}
              item={item}
              totalVotes={totalVotes}
              onVote={voteForItem}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

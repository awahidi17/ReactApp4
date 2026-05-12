import type { VoteItem } from "../models/VoteItem";

type VoteSummaryProps = {
  totalVotes: number;
  topItem: VoteItem;
  onReset: () => void;
};

export default function VoteSummary({ totalVotes, topItem, onReset }: VoteSummaryProps) {
  return (
    <section className="summary-card">
      <div>
        <p className="eyebrow">Voting Summary</p>
        <h2>{totalVotes} total votes</h2>
        <p>
          Current leader: <strong>{topItem.title}</strong> with {topItem.votes} votes.
        </p>
      </div>

      <button className="secondary-button" onClick={onReset}>
        Reset Votes
      </button>
    </section>
  );
}

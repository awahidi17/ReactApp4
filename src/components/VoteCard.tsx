import type { VoteItem } from "../models/VoteItem";

type VoteCardProps = {
  item: VoteItem;
  totalVotes: number;
  onVote: (id: string) => void;
};

export default function VoteCard({ item, totalVotes, onVote }: VoteCardProps) {
  const votePercent = totalVotes === 0 ? 0 : Math.round((item.votes / totalVotes) * 100);

  return (
    <article className="vote-card">
      <img src={item.imageUrl} alt={item.title} className="vote-card-image" />

      <div className="vote-card-body">
        <div className="category-label">{item.category}</div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        <div className="vote-progress" aria-label={`${item.title} vote progress`}>
          <span style={{ width: `${votePercent}%` }} />
        </div>

        <div className="vote-row">
          <strong>{item.votes} votes</strong>
          <span>{votePercent}% of total</span>
        </div>

        <button className="primary-button" onClick={() => onVote(item.id)}>
          Vote for {item.title}
        </button>
      </div>
    </article>
  );
}

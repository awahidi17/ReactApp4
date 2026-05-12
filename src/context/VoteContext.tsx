import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { voteItems } from "../data/voteItems";
import type { VoteItem } from "../models/VoteItem";

type VoteContextType = {
  items: VoteItem[];
  totalVotes: number;
  topItem: VoteItem;
  voteForItem: (id: string) => void;
  resetVotes: () => void;
};

const VoteContext = createContext<VoteContextType | undefined>(undefined);

export function VoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<VoteItem[]>(voteItems);

  function voteForItem(id: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  }

  function resetVotes() {
    setItems(voteItems);
  }

  const totalVotes = items.reduce((total, item) => total + item.votes, 0);
  const topItem = items.reduce((leader, item) =>
    item.votes > leader.votes ? item : leader
  );

  const value = useMemo(
    () => ({ items, totalVotes, topItem, voteForItem, resetVotes }),
    [items, totalVotes, topItem]
  );

  return <VoteContext.Provider value={value}>{children}</VoteContext.Provider>;
}

export function useVotes() {
  const context = useContext(VoteContext);

  if (!context) {
    throw new Error("useVotes must be used inside VoteProvider");
  }

  return context;
}

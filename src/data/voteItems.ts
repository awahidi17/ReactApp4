import type { VoteItem } from "../models/VoteItem";

export const voteItems: VoteItem[] = [
  {
    id: "react",
    title: "React",
    description: "A flexible library for building fast user interfaces with reusable components.",
    category: "Frontend Tool",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80",
    votes: 8,
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "A strongly typed language that helps make JavaScript projects easier to maintain.",
    category: "Programming Language",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    votes: 6,
  },
  {
    id: "nextjs",
    title: "Next.js",
    description: "A React framework used for routing, production builds, and modern web applications.",
    category: "React Framework",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    votes: 5,
  },
  {
    id: "firebase",
    title: "Firebase",
    description: "A backend platform for authentication, databases, hosting, and app services.",
    category: "Backend Service",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    votes: 4,
  },
];

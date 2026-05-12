export default function About() {
  return (
    <main className="container content-section">
      <section className="about-card">
        <p className="eyebrow">Project Details</p>
        <h1>ReactApp4</h1>
        <p>
          Created by Ahmad Wahidi for MWD4C React Development Assignment 4.
        </p>
        <ul>
          <li>Reusable voting card and summary components</li>
          <li>Global state managed with React Context</li>
          <li>Unit tests using Vitest and React Testing Library</li>
          <li>Responsive layout using Bootstrap and custom CSS</li>
        </ul>
      </section>
    </main>
  );
}

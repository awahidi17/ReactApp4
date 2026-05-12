import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark app-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          ReactApp4 Voting
        </Link>

        <div className="d-flex gap-2">
          <NavLink className="btn btn-light btn-sm" to="/">
            Home
          </NavLink>
          <NavLink className="btn btn-outline-light btn-sm" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

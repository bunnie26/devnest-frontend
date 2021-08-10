import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

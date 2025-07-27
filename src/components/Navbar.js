import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h2>🎬 Movie Review Blog</h2>
    <Link to="/">Home</Link>
  </nav>
);

export default Navbar;

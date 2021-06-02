import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-blue-500 h-16 min-w-full text-white shadow-md p-3.5">
      <Link to="/">LinkedVisualizer</Link>
      <div></div>
    </nav>
  );
};

export default Navbar;

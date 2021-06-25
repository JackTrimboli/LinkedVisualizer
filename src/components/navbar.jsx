import React from "react";
import Button from "./Button";
import Navdropdown from "./Navdropdown";
const Navbar = (props) => {
  return (
    <nav className="bg-blue-500 h-16 min-w-full text-white shadow-md p-3.5">
      <Button text="Linked Visualizer"></Button>
      <Button text="Add Node"></Button>
      <Button text="Remove Node"></Button>
      <Navdropdown className="text-black"></Navdropdown>
    </nav>
  );
};

export default Navbar;

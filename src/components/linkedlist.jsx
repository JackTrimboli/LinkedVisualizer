import React, {useState} from "react";
import Node from "./Node";

const Linkedlist = (props) => {
  const [list, setList] = useState([null]);
  const nodes = list.map((node) => {
    <li>{node}</li>
  })
  return (
  <div> 
    <ul>{nodes}</ul>
  </div>);
};

export default Linkedlist;

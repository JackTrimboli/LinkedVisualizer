import React from "react";
import Node from "./Node";

const Linkedlist = (props) => {
  const list = props.listData;
  const nodes = list.map((node) => {
    <li>{node}</li>
  });
  return (
  <div>
      <ul className="flex flex-row">{nodes}</ul>
  </div>
)};

export default Linkedlist;

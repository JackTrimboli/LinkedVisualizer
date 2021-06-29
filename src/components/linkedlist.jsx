import React, {useState} from "react";
import Node from "./Node";

const Linkedlist = (props) => {
  const [list, setList] = useState([null]);
  const nodes = list.map((node) => {
    <li>{node}</li>
  })
  function handleAddNode(val){
    const newList = [...list, <Node value={val}/>];
    setList(newList);
    console.log("Node added to list")
  }
  function handleRemoveNode(val){
    const index = list.indexOf(val);
    if (index > -1) {
      const removed = list.splice(index, 1); //removes one element at the index of val
      setList(removed);
      console.log("Node removed from list")
    }else{
      console.log("No node exists with the provided value: " + val);
    }
  }
  return (
  <div>
    <nav className="fixed bg-blue-500 h-12  min-w-full text-white shadow-md p-3.5">
      <button className="relative ml-8 mr-8 " onClick={handleAddNode}>Add Node</button>
      <button className="relative ml-8 mr-8 " onClick={handleRemoveNode}>Remove Node</button>
    </nav>
    <div>
      <ul className="flex flex-row">{nodes}</ul>
    </div>
  </div>
)};

export default Linkedlist;

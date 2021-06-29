import {React, useState} from 'react';
import Node from "./Node";


const Heap = (props) => {
  const [list, setList] = useState([null]);
  const nodes = list.map((node) => {
    <li>{node}</li>
  })
  function handleAddNode(val){
    console.log("Node added to list")
  }
  function handleRemoveNode(val){
    console.log("Node removed from list")
  }
  return (
    <div>
      <nav className="fixed bg-blue-500 h-12  min-w-full text-white shadow-md p-3.5">
        <button className="relative ml-8 mr-8 " onClick={handleAddNode}>Add Node</button>
        <button className="relative ml-8 mr-8 " onClick={handleRemoveNode}>Remove Node</button>
      </nav>
      <div> 
        {/* <span className="flex justify-center mt-8 text-gray-400 text-lg">Now Displaying: Linked-List</span> */}
        <ul>{nodes}</ul>
      </div>
  </div>
  );
}

export default Heap

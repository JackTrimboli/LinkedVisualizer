import { React, useState, useEffect } from "react";
import Node from "./Node";

const Linkedlist = (props) => {
  const [nodes, setNodes] = useState([]);
  const [key, setKey] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  function isEmpty() {
    if (nodes.length === 0) return true;
    return false;
  }

  useEffect(() => {
    if (isMounted) {
      if (nodes.length < props.listData.length) {
        handleAddNode();
      } else if (nodes.length > props.listData.length) {
        handleRemoveNode();
      }
    } else setIsMounted(true);
  }, [props.listData]);

  function handleAddNode() {
    setNodes([
      ...nodes,
      <Node value={props.listData[props.listData.length - 1]} key={key} />,
    ]);
    setKey(key + 1);
  }
  function handleRemoveNode() {
    console.log(
      "Removal Detect by useEffect in 'Linked-List. Current List:" +
        props.listData.toLocaleString()
    );
    let newNodes = [...nodes];
    newNodes.splice(props.removal, 1);
    setNodes(newNodes);
  }
  if (isEmpty()) {
    return (
      <span className="absolute w-full top-1/2 flex justify-center text-gray-400 text-lg">
        The list is currently empty.
      </span>
    );
  } else {
    return (
      <div className="m-0 absolute w-full top-1/2 flex justify-evenly">
        <ul className="flex flex-row items-center justify-evenly">
          {nodes}
          <li className="text-4xl font-bold">NULL</li>
        </ul>
      </div>
    );
  }
};

export default Linkedlist;

import { React, useState, useEffect } from "react";
import Node from "./Node";

const Linkedlist = (props) => {
  const [nodes, setNodes] = useState([]);
  const [key, setKey] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      if (nodes.length < props.listData.length) {
        //addition
        setNodes([
          ...nodes,
          <Node value={props.listData[props.listData.length - 1]} key={key} />,
        ]);
        setKey(key + 1);
      } else {
        //Removal
        console.log(
          "Removal Detect by useEffect in 'Linked-List. Current List:" +
            props.listData.toLocaleString()
        );
        let newNodes = [...nodes];
        newNodes.splice(props.removal, 1);
        setNodes(newNodes);
      }
    } else setIsMounted(true);
  }, [props.listData]);

  return (
    <div className="m-0 absolute top-1/2 left-1/2 justify-evenly">
      <ul className="flex flex-row items-center justify-evenly">{nodes}</ul>
    </div>
  );
};

export default Linkedlist;

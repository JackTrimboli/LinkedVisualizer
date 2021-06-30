import {React, useState, useEffect} from "react";
import Node from "./Node";

const Linkedlist = (props) => {
  const [nodes, setNodes] = useState([]);
  const [key, setKey] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(()=> {
    if(isMounted){
      setNodes([...nodes, <Node value={props.listData[-1]} key={key}/>]);
      setKey(key+1);
      console.log('Node Received!');
    }else
      setIsMounted(true);
  },[props.listData])
  return (
  <div className="m-0 absolute top-1/2 left-1/2 justify-evenly">
      <ul className="flex flex-row items-center justify-evenly">
        {nodes}
      </ul>
  </div>
)};

export default Linkedlist;

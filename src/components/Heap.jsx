import React from "react";
import { Tree } from "react-organizational-chart";
import HeapNode from "./HeapNode";

const Heap = (props) => {
  const heap = convertToHeap(props.listData);

  function convertToHeap(data) {
    return <HeapNode value={data[0]} remaining={props.listData} n={0} />;
  }

  if (props.listData.length === 0) {
    return (
      <span className="absolute w-full top-1/2 flex justify-center text-gray-400 text-lg">
        The Heap is currently empty.
      </span>
    );
  } else {
    return (
      <div className="m-0 absolute w-full top-1/3 flex justify-evenly">
        <Tree
          lineWidth={"5px"}
          lineColor={"black"}
          lineBorderRadius={"10px"}
          nodePadding={"15px"}
          lineHeight={"30px"}
        >
          {heap}
        </Tree>
      </div>
    );
  }
};

export default Heap;

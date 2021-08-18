import React from "react";
import { Tree } from "react-organizational-chart";

const Heap = (props) => {
  const heap = convertToHeap();

  function convertToHeap() {
    return null;
  }

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
};

export default Heap;

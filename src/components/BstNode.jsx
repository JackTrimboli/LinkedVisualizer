import React from "react";
import { TreeNode } from "react-organizational-chart";

const BstNode = ({ value, leftChild, rightChild }) => {
  const nodeLabel = (
    <div className="-my-2 mx-6 text-center inline-block">
      <div className="relative text-center transform bg-blue-600 z-10 rounded-full h-20 w-20 border-2 border-black border-4 shadow-md hover:scale-150 cursor-pointer">
        <p className="absolute w-full top-1/4 flex justify-center text-2xl">
          {value}
        </p>
      </div>
    </div>
  );
  return (
    <TreeNode label={nodeLabel}>
      {leftChild && <BstNode {...leftChild} />}
      {rightChild && <BstNode {...rightChild} />}
    </TreeNode>
  );
};

export default BstNode;

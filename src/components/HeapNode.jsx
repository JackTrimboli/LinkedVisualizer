import { React } from "react";
import { TreeNode } from "react-organizational-chart";

const HeapNode = ({ value, remaining, n }) => {
  const nodeLabel = (
    <div className="-my-2 mx-6 text-center inline-block">
      <div className="relative text-center transform bg-blue-600 z-10 rounded-full h-20 w-20 border-2 border-black border-4 shadow-md hover:scale-125 cursor-pointer">
        <p className="absolute w-full top-1/4 flex justify-center text-2xl text-white">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <TreeNode label={nodeLabel} className="pb-10 z-0">
      {remaining[2 * n + 1] && (
        <HeapNode
          value={remaining[2 * n + 1]}
          remaining={remaining}
          n={2 * n + 1}
        />
      )}
      {remaining[2 * n + 2] && (
        <HeapNode
          value={remaining[2 * n + 2]}
          remaining={remaining}
          n={2 * n + 2}
        />
      )}
    </TreeNode>
  );
};

export default HeapNode;

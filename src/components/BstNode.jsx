import { React } from "react";
import { TreeNode } from "react-organizational-chart";

const BstNode = ({ value, remaining }) => {
  const smaller = getSmaller(remaining);
  const larger = getLarger(remaining);

  function getSmaller(data) {
    let small = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i] <= value) small.push(data[i]);
    }
    return small;
  }
  function getLarger(data) {
    let large = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i] > value) large.push(data[i]);
    }
    return large;
  }

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
    <TreeNode label={nodeLabel}>
      {smaller[0] && (
        <BstNode
          value={smaller[0]}
          remaining={smaller.slice(1, smaller.length)}
        />
      )}
      {larger[0] && (
        <BstNode value={larger[0]} remaining={larger.slice(1, larger.length)} />
      )}
    </TreeNode>
  );
};

export default BstNode;

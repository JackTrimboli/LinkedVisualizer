import { React, useState, useEffect } from "react";
import { TreeNode } from "react-organizational-chart";

const BstNode = ({ value, remaining }) => {
  const [smaller, setSmaller] = useState([]); //array of values smaller than current
  const [larger, setLarger] = useState([]); //array of values larger than current
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    //get info for each list on mount
    if (!mounted) {
      let small = [];
      let large = [];
      for (let i = 0; i < remaining.length; i++) {
        if (remaining[i] <= value) small.push(remaining[i]);
        else large.push(remaining[i]);
      }
      setSmaller(small);
      setLarger(large);
      setMounted(true);
    }
  }, []);

  const nodeLabel = (
    <div className="-my-2 mx-6 text-center inline-block">
      <div className="relative text-center transform bg-blue-600 z-10 rounded-full h-20 w-20 border-2 border-black border-4 shadow-md hover:scale-150 cursor-pointer">
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

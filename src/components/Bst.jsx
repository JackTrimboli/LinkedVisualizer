import { React, useState, useEffect } from "react";
import BstNode from "./BstNode";
import { Tree } from "react-organizational-chart";

const Bst = (props) => {
  const [root, setRoot] = useState();

  useEffect(() => {
    setRoot(
      <BstNode
        value={props.listData[0]}
        remaining={props.listData.slice(1, props.listData.length)}
      />
    );
  }, [props.listData]);

  if (props.listData.length === 0) {
    return (
      <span className="absolute w-full top-1/2 flex justify-center text-gray-400 text-lg">
        The BST is currently empty.
      </span>
    );
  } else {
    return (
      <div className="m-0 absolute w-full top-1/3 flex justify-evenly">
        <Tree
          label={null}
          lineWidth={"5px"}
          lineColor={"black"}
          lineBorderRadius={"10px"}
        >
          {root}
        </Tree>
      </div>
    );
  }
};

export default Bst;

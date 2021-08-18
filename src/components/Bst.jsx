import { React } from "react";
import BstNode from "./BstNode";
import { Tree } from "react-organizational-chart";

const Bst = (props) => {
  const bst = convertToBinaryTree(props.listData);

  function convertToBinaryTree(data) {
    return <BstNode value={data[0]} remaining={data.slice(1, data.length)} />;
  }

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
          lineWidth={"5px"}
          lineColor={"black"}
          lineBorderRadius={"10px"}
          nodePadding={"15px"}
          lineHeight={"30px"}
        >
          {bst}
        </Tree>
      </div>
    );
  }
};

export default Bst;

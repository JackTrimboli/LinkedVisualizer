import { React, useState } from "react";
import BstNode from "./BstNode";
import { Tree, TreeNode } from "react-organizational-chart";

const Bst = (props) => {
  const [nodes, setNodes] = useState([]);
  const [key, setKey] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  return (
    <div className="m-0 absolute w-full top-1/3 flex justify-evenly">
      <Tree
        label={<BstNode value={100} children={2} />}
        lineWidth={"5px"}
        lineColor={"black"}
        lineBorderRadius={"6px"}
      >
        {/*
          PLACEHOLDER VALUES TO TEST TREE PACKAGE
         <TreeNode label={<BstNode value={100} children={2} />}>
          <TreeNode label={<BstNode value={100} children={2} />}></TreeNode>
          <TreeNode label={<BstNode value={100} children={2} />}></TreeNode>
        </TreeNode>
        <TreeNode label={<BstNode value={100} children={2} />}>
          <TreeNode label={<BstNode value={100} children={2} />}></TreeNode>
          <TreeNode label={<BstNode value={100} children={2} />}></TreeNode>
        </TreeNode> */}
      </Tree>
    </div>
  );
};

export default Bst;

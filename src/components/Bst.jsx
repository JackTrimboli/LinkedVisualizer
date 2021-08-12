import { React, useState, useEffect } from "react";
import BstNode from "./BstNode";
import { Tree, TreeNode } from "react-organizational-chart";

const Bst = (props) => {
  const [numNodes, setNumNodes] = useState(0);
  const [root, setRoot] = useState(null);

  // useEffect(() => {
  //   if (props.listData.length > numNodes) {
  //     //Addition of a node detected
  //     handleAddNode();
  //   } else if (props.listData.length < numNodes) {
  //     //Removal of a node detected
  //     setNumNodes(numNodes - 1);
  //     handleRemoveNode();
  //   }
  // }, [props.listData]);

  // function handleAddNode() {
  //   if (numNodes === 0) {
  //     console.log(props.listData[0]);
  //   } else {
  //     return;
  //   }
  //   setNumNodes(numNodes + 1);
  // }
  // function handleRemoveNode() {
  //   return;
  // }

  return (
    <div className="m-0 absolute w-full top-1/3 flex justify-evenly">
      <Tree
        label={null}
        lineWidth={"5px"}
        lineColor={"black"}
        lineBorderRadius={"10px"}
      >
        <BstNode
          value={1}
          leftChild={{
            value: "1",
            rightChild: null,
            leftChild: null,
          }}
          rightChild={{
            value: "1",
            rightChild: null,
            leftChild: null,
          }}
        />
      </Tree>
    </div>
  );
};
/*
  --- BST Node Function --- 
    1.
    2.
    3.
*/

export default Bst;

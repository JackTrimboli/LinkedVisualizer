import { React } from "react";
import Node from "./Node";

const Linkedlist = (props) => {
  const list = convertToLinkedList(props.listData);

  function convertToLinkedList(data) {
    return data.map((x, index) => <Node value={x} key={index} />);
  }

  if (props.listData.length === 0) {
    return (
      <span className="absolute w-full top-1/2 flex justify-center text-gray-400 text-lg">
        The Linked-List is currently empty.
      </span>
    );
  } else {
    return (
      <div className="px-8 mx-8 absolute top-1/2 left-1/2 right-1/2 flex justify-evenly">
        <ul className="flex flex-row items-center justify-evenly">
          {list}
          <li className="text-2xl font-bold">NULL</li>
        </ul>
      </div>
    );
  }
};

export default Linkedlist;

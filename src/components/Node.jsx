import {React} from "react";
const Node = (props) => {
  const val = props.value;
  return (
    <div className="flex flex-row">
      <div className="bg-blue-600 z-10 rounded-full h-20 w-20 border-2 border-black border-4 shadow-md">
        <p className="top-1/2 left-1/2 items-center mt-5 ml-1">Value: {val}</p>
      </div>
      <div className="w-20 h-5 mt-7 -m-2 z-0 bg-black"></div>
    </div>
  );
};

export default Node;

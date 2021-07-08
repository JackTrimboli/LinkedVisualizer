import React from "react";

const BstNode = (props) => {
  const val = props.value;
  return (
    <div className="-my-2 mx-6 text-center inline-block">
      <div className="relative text-center transform bg-blue-600 z-10 rounded-full h-20 w-20 border-2 border-black border-4 shadow-md hover:scale-150 cursor-pointer">
        <p className="absolute w-full top-1/4 flex justify-center text-2xl">
          {val}
        </p>
      </div>
    </div>
  );
};

export default BstNode;

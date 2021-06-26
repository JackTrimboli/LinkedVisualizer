import {React, useState} from "react";
const Node = (props) => {
  const [val, setVal] = useState(0);
  return (
    <div className="bg-blue-600 rounded-full h-12 w-12 border-2 border-black shadow-md ">Value: {val}</div>
  );
};

export default Node;

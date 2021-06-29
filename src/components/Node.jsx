import {React, useState} from "react";
const Node = (props) => {
  const [val, setVal] = useState(props.value);
  return (
    <div className="bg-blue-600 rounded-full m-auto h-20 w-20 border-2 border-black shadow-md ">Value: {val}</div>
  );
};

export default Node;

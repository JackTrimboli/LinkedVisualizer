import { React } from "react";
const Node = (props) => {
  return (
    <div className="flex flex-row text-center">
      <div className="relative text-center transform bg-blue-600 z-10 rounded-full h-20 w-20 border-2 border-black border-4 shadow-md hover:scale-125 cursor-pointer">
        <p className="absolute w-full top-1/4 flex justify-center text-2xl text-white">
          {props.value}
        </p>
      </div>
      <div style={container}>
        <div style={stemStyles}></div>
        <div style={arrowStyles}></div>
      </div>
    </div>
  );
};
const container = {
  display: "flex",
  marginLeft: "-5px",
  marginTop: "17px",
};
const stemStyles = {
  width: "40px",
  height: "10px",
  marginTop: "17.5px",
  backgroundColor: "black",
};
const arrowStyles = {
  width: "0",
  height: "0",
  borderTop: "22px solid transparent",
  borderBottom: "22px solid transparent",
  borderLeft: "22px solid black",
};

export default Node;

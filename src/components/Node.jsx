import { React } from "react";
const Node = (props) => {
  return (
    <div className="flex flex-row text-center">
      <div className="relative text-center transform bg-blue-600 z-10 rounded-full h-20 w-20 border-2 border-black border-4 shadow-md hover:scale-150 cursor-pointer">
        <p className="absolute w-full top-1/4 flex justify-center text-2xl">
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
  marginTop: "10px",
};
const stemStyles = {
  width: "50px",
  height: "15px",
  marginTop: "22px",
  backgroundColor: "black",
};
const arrowStyles = {
  width: "0",
  height: "0",
  borderTop: "30px solid transparent",
  borderBottom: "30px solid transparent",
  borderLeft: "30px solid black",
};

export default Node;

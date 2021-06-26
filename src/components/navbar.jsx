import {React} from 'react';
import Select from "react-select";
import Button from "./Button";

const Navbar = (props) => {
  const options = [
    { value: 1, label: "Linked-List" },
    { value: 2, label: "Binary Search Tree" },
    { value: 3, label: "Heap" },
  ];
  const selectStyles ={
    option: (provided, state) => ({
      ...provided,
      color: "black",
      padding: 10,
    }),
    singleValue: (provided) => {
      return { ...provided};
    }
  }
  function handleSelectChange(event){
    props.parentCallBack(event.value)
    console.log("option Selected: " + event.label)
  }
  return (
    <nav className="bg-blue-500 h-16 min-w-full text-white shadow-md p-3.5">
      <Button text="Linked Visualizer"></Button>
      <Button text="Add Node"></Button>
      <Button text="Remove Node"></Button>
      <Select
      onChange={handleSelectChange}
      options={options}
      className="w-32 text-black-400 inline-block"
      styles={selectStyles}
    />
    </nav>
  );
};


export default Navbar;

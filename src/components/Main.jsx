import {useState, React} from "react";
import Select from "react-select";
import Button from "./Button";
import Linkedlist from "./Linkedlist";
import Bst from './Bst';
import Heap from "./Heap";

function Main(props) {
  const [structure, setStructure] = useState(null)
  const [label, setLabel] = useState("None")
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
  function handleSelectChange(selectData){
    if (selectData.value === 1){
      setLabel("Linked-List");
      setStructure(<Linkedlist/>);
    }
    else if (selectData.value === 2){
      setLabel("Binary-Search-Tree");
      setStructure(<Bst/>);
    }
    else if (selectData.value === 3){
      setLabel("Heap");
      setStructure(<Heap/>);
    } 
  }
  return (
    <div className="box-border w-full">
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
      {structure ?
       <span className="flex justify-center mt-8 text-gray-400 text-lg">Now Displaying:  {label}</span> :
      <span className="flex justify-center mt-8 text-gray-400 text-lg">Select a Data Structure from the drop down menu above.</span>}
      <div>{structure}</div>
    </div>
  );
}

export default Main;
/*
background-color: #ebf5f7;
background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239dc4d6' fill-opacity='0.27'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");*/

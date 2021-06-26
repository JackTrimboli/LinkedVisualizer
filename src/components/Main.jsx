import {useState, React} from "react";
import Navbar from "./Navbar";
import Linkedlist from "./Linkedlist";
import Bst from './Bst';
import Heap from "./Heap";

function Main(props) {
  const [structure, setStructure] = useState(<div>No Selection!</div>)
  const [label, setLabel] = useState("None")


  function handleCallBack(selectData){
    if (selectData === 1){
      setLabel("Linked-List");
      setStructure(<Linkedlist/>);
    }
    else if (selectData === 2){
      setLabel("Binary-Search-Tree");
      setStructure(<Bst/>);
    }
    else if (selectData === 3){
      setLabel("Heap");
      setStructure(<Heap/>);
    }
    
  }
  return (
    <div className="box-border w-full">
      <Navbar parentCallBack = {handleCallBack}/>
      <span className="flex justify-center mt-8 text-gray-400 text-lg">Now Displaying:  {label}</span> 
      {structure}
    </div>
  );
}

export default Main;
/*
background-color: #ebf5f7;
background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239dc4d6' fill-opacity='0.27'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");*/

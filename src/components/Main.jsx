import {useState, React} from "react";
import Select from "react-select";
import Linkedlist from "./Linkedlist";
import Bst from './Bst';
import Heap from "./Heap";


function Main(props) {
  const [structure, setStructure] = useState(null)
 
  const options = [ //React select options
    { value: 1, label: "Linked-List" },
    { value: 2, label: "Binary Search Tree" },
    { value: 3, label: "Heap" },
  ];
  const selectStyles ={ //React Select styling API
    option: (provided, state) => ({
      ...provided,
      color: "black",
      padding: 8,
    }),
    singleValue: (provided) => {
      return { ...provided};
    }
  }
  function handleSelectChange(selectData){
    if (selectData.value === 1){
      setStructure(<Linkedlist/>);
    }
    else if (selectData.value === 2){
      setStructure(<Bst/>);
    }
    else if (selectData.value === 3){
      setStructure(<Heap/>);
    } 
  }
  // function handleAddNode(event){
  //   event.preventDefault();
  //   if(structure)
  //     setShowAddCard(true);
  //   console.log("Add card revealed")
  // }
  // function handleRemoveNode(event){
  //   event.preventDefault();
  //   if(structure)
  //     setShowRemoveCard(true);
  //   console.log("Remove card revealed")
  // }

  return (
    <div className="box-border w-full h-full">
      <nav className="bg-blue-500 h-16 min-w-full text-white shadow-md p-3.5">
        <button className="ml-8 mr-8">Linked Visualizer</button>
        <Select
        autoFocus={true}
        onChange={handleSelectChange}
        options={options}
        className="w-32 text-black-400 inline-block"
        styles={selectStyles}
        />
      </nav>
      {structure? structure : <span className="flex justify-center mt-8 text-gray-400 text-lg">Select a Data Structure from the drop down menu above.</span>}
    </div>
  );
}

export default Main;
/*
background-color: #ebf5f7;
background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239dc4d6' fill-opacity='0.27'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");*/

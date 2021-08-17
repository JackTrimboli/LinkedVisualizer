import { useState, React } from "react";
import Select from "react-select";
import PopupModal from "./PopupModal";
import Linkedlist from "./Linkedlist";
import Bst from "./Bst";
import Heap from "./Heap";

function Main() {
  const [list, setList] = useState([]);
  const [label, setLabel] = useState("");
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const [removalIdx, setRemovalIdx] = useState();

  const options = [
    //React select options
    { value: 1, label: "Linked-List" },
    { value: 2, label: "Binary Search Tree" },
    { value: 3, label: "Heap" },
  ];
  const selectStyles = {
    //React Select styling API
    option: (provided, state) => ({
      ...provided,
      color: "black",
      padding: 8,
    }),
    container: (provided) => ({
      ...provided,
      width: "200px",
      marginLeft: "1rem",
    }),
    singleValue: (provided) => {
      const transition = "opacity 300ms";
      return { ...provided, transition };
    },
  };
  function handleSelectChange(selectData) {
    if (selectData.value === 1) {
      if (label === "Linked-List") {
        console.log("Structure already selected.");
        return;
      }
      setLabel("Linked-List");
      console.log("Link-list Selected. The List is empty.");
    } else if (selectData.value === 2) {
      if (label === "Binary-Search-Tree") {
        console.log("Structure already selected.");
        return;
      }
      setLabel("Binary-Search-Tree");
      console.log("BST Selected. The List is empty.");
    } else if (selectData.value === 3) {
      setLabel("Heap");
      console.log("Heap Selected. The List is empty.");
      return;
    }
    setList([]);
  }
  function handleAddNode(value) {
    if (!label) {
      console.log("Pick a structure first!");
      return;
    }
    if (!value) {
      console.log("You must enter a value.");
      return;
    }
    toggleAddPopup();
    setList((list) => [...list, parseInt(value)]);
  }
  function handleRemoveNode(value) {
    if (!label) {
      console.log("Pick a Structure First!");
      return;
    }
    if (!value) {
      console.log("You must enter a value.");
      return;
    }
    toggleRemovePopup();
    if (list.length > 0) {
      let index = list.indexOf(parseInt(value));
      setRemovalIdx(index);
      let newList = [...list];
      newList.splice(index, 1);
      setList(newList);
    }
    console.log("List After Removal: " + list.toLocaleString());
  }
  function toggleAddPopup() {
    if (label === "") {
      console.log("You must select a structure before you can add nodes.");
      return;
    }
    if (showAddPopup) setShowAddPopup(false);
    else setShowAddPopup(true);
  }
  function toggleRemovePopup() {
    if (label === "") {
      console.log("You must select a structure before you can remove nodes.");
      return;
    }
    if (showRemovePopup) setShowRemovePopup(false);
    else setShowRemovePopup(true);
  }
  return (
    <div className="box-border w-full h-full">
      {/* <Tutorial /> */}
      <nav className="bg-blue-500 h-16 min-w-full text-white shadow-md p-3.5">
        <button className="ml-8 mr-8 text-lg font-bold focus:outline-none">
          Linked Visualizer
        </button>
        <button
          className="ml-8 mr-8 px-2 py-1 text-lg font-bold rounded-lg focus:outline-none hover:bg-blue-400 active:bg-blue-600"
          onClick={toggleAddPopup}
        >
          Add Node
        </button>
        <button
          className="ml-8 mr-8 px-2 py-1 text-lg font-bold rounded-lg focus:outline-none hover:bg-blue-400"
          onClick={toggleRemovePopup}
        >
          Remove Node
        </button>
        <Select
          autoFocus={true}
          onChange={handleSelectChange}
          options={options}
          className="inline-block"
          styles={selectStyles}
        />
      </nav>
      {label ? (
        <span className="flex justify-center mt-8 text-gray-400 text-lg">
          Now Displaying: {label}
        </span>
      ) : (
        <span className="flex justify-center mt-8 text-gray-400 text-lg">
          Select a Data Structure from the drop down menu above.
        </span>
      )}

      {label === "Linked-List" ? (
        <Linkedlist listData={list} removal={removalIdx} />
      ) : label === "Binary-Search-Tree" ? (
        <Bst listData={list} />
      ) : label === "Heap" ? (
        <Heap listData={list} removal={removalIdx} />
      ) : null}

      <PopupModal
        show={showAddPopup}
        title="Enter Value to Add:"
        handleShow={toggleAddPopup}
        action="Add Node"
        handlerAction={handleAddNode}
      />
      <PopupModal
        show={showRemovePopup}
        title="Enter Value to Remove:"
        handleShow={toggleRemovePopup}
        action="Remove Node"
        handlerAction={handleRemoveNode}
      />
    </div>
  );
}
export default Main;

import { useState, React } from "react";
import Select from "react-select";
import PopupModal from "./PopupModal";
import Linkedlist from "./Linkedlist";
import Bst from "./Bst";
import Heap from "./Heap";
import { Transition } from "@tailwindui/react";

function Main() {
  const [list, setList] = useState([]);
  const [label, setLabel] = useState("");
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const [removalIdx, setRemovalIdx] = useState();
  const [statusMessage, setStatusMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    //React select options
    { value: 1, label: "Linked-List" },
    { value: 2, label: "Binary Search Tree" },
    { value: 3, label: "Max-Heap" },
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
        setStatusMessage("This Structure is already selected.");
        displayStatus();
        return;
      }
      setLabel("Linked-List");
      setStatusMessage("Link-list Selected. The List is empty.");
      displayStatus();
    } else if (selectData.value === 2) {
      if (label === "Binary-Search-Tree") {
        setStatusMessage("This Structure is already selected.");
        displayStatus();
        return;
      }
      setLabel("Binary-Search-Tree");
      setStatusMessage("BST Selected. The BST is empty.");
      displayStatus();
    } else if (selectData.value === 3) {
      if (label === "Max-Heap") {
        setStatusMessage("This Structure is already selected.");
        displayStatus();
        return;
      }
      setLabel("Max-Heap");
      setStatusMessage("Max-Heap Selected. The Heap is empty.");
      displayStatus();
      return;
    }
    setList([]);
  }
  function handleAddNode(value) {
    if (!label) {
      setStatusMessage("You must select a structure before you can add nodes.");
      displayStatus();
      return;
    }
    if (!value) {
      alert("You must enter a value.");
      return;
    }
    toggleAddPopup();
    value = parseInt(value);
    if (label !== "Max-Heap") setList((list) => [...list, value]);
    else handleAddHeap(value);
  }
  function handleAddHeap(value) {
    let newList = [...list];
    let currentPosition = newList.length;
    let parentPosition = Math.floor((currentPosition - 1) / 2);
    trickleUp(value, newList, currentPosition, parentPosition);
  }
  function handleRemoveNode(value) {
    if (!label) {
      setStatusMessage(
        "You must select a structure before you can remove nodes."
      );
      displayStatus();
      return;
    }
    if (!value) {
      alert("You must enter a value.");
      return;
    }
    toggleRemovePopup();
    value = parseInt(value);
    if (label === "Linked-List") removeListNode(value);
    else if (label === "Binary-Search-Tree") removeBstNode(value);
    else if (label === "Max-Heap") removeHeapNode(value);
  }
  function removeListNode(value) {
    if (list.length > 0) {
      const index = list.indexOf(value);
      setRemovalIdx(index);
      let newList = [...list];
      newList.splice(index, 1);
      setList(newList);
      setStatusMessage(
        "The value: " + value + " has been removed from the List."
      );
      displayStatus();
    }
  }
  function removeBstNode(value) {
    //Step one: Find first occurance of the val being deleted
    const index = list.indexOf(value);
    if (index === -1) {
      setStatusMessage("The entered value does not exist in this BST.");
      displayStatus();
      return;
    }
    let newList = [...list];

    // Step two: get the subtree of val represented as an array
    let temp = [];
    while (newList[0] !== value) {
      if (value <= newList[0]) {
        for (let i = 1; i < newList.length; i++) {
          if (newList[i] <= newList[0]) temp.push(newList[i]);
        }
      } else {
        for (let i = 1; i < newList.length; i++) {
          if (newList[i] > newList[0]) temp.push(newList[i]);
        }
      }
      newList = [...temp]; //set newList equal to the current subtree
      temp = [];
    } //After exiting the loop, we should have the subtree we need to work with.

    //Step three: get the smaller and larger values of THAT subtree
    let smaller = [];
    let larger = [];
    for (let i = 1; i < newList.length; i++) {
      if (newList[i] <= newList[0]) smaller.push(newList[i]);
      else larger.push(newList[i]);
    }
    //Step four: determine the type of parent the node is
    let parentType;
    if (!smaller[0] && !larger[0]) parentType = 0;
    else if (!smaller[0] && larger[0]) parentType = 1;
    else if (smaller[0] && !larger[0]) parentType = 2;
    else parentType = 3;

    //Step five: perform the deletion based on the parent type
    let l = [...list];
    switch (parentType) {
      //remove the value from the tree
      case 0:
        l.splice(l.indexOf(value), 1);
        setList(l);
        break;
      //replace the value with the larger subtree
      case 1:
        l.splice(l.indexOf(larger[0]), 1); //remove occurance of larger[0]
        l[l.indexOf(value)] = larger[0]; //replace val with larger[0]
        setList(l);
        break;
      //replace the value with the smaller subtree
      case 2:
        l.splice(l.indexOf(smaller[0]), 1); //remove occurance of smaller[0]
        l[l.indexOf(value)] = smaller[0]; //replace val with smaller[0]
        setList(l);
        break;
      case 3:
        //Replace the value with the rightmost value of the smaller subtree
        let max = Number.MIN_VALUE;
        for (let i = 0; i < smaller.length; i++) {
          if (smaller[i] > max) max = smaller[i];
        }
        l.splice(l.indexOf(max), 1); //remove occurance of smaller[0]
        l[l.indexOf(value)] = max;
        setList(l);
        break;
      default:
        console.log("An error occurred.");
        break;
    }
    setStatusMessage("The value: " + value + " has been removed from the BST.");
    displayStatus();
  }
  function removeHeapNode(value) {
    let newList = [...list];
    const size = newList.length;
    const index = newList.indexOf(value);
    if (index === -1) {
      setStatusMessage("The entered value does not exist in this heap.");
      displayStatus();
      return;
    }

    [newList[index], newList[size - 1]] = [newList[size - 1], newList[index]];
    newList.splice(size - 1);

    for (let index = parseInt(newList.length / 2 - 1); index >= 0; index--) {
      maxHeapify(newList, newList.length, index);
    }
    setStatusMessage(
      "The value: " + value + " has been removed from the heap."
    );
    displayStatus();
    setList(newList);
  }

  function maxHeapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }
    // If right child is smaller than smallest so far
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }
    // If smallest is not root
    if (largest !== i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      // Recursively heapify subtree
      maxHeapify(arr, n, largest);
    }
  }
  function toggleAddPopup() {
    if (label === "") {
      setStatusMessage("You must select a structure before you can add nodes.");
      displayStatus();
      return;
    }
    if (showAddPopup) setShowAddPopup(false);
    else setShowAddPopup(true);
  }
  function toggleRemovePopup() {
    if (label === "") {
      setStatusMessage(
        "You must select a structure before you can remove nodes."
      );
      displayStatus();
      return;
    }
    if (showRemovePopup) setShowRemovePopup(false);
    else setShowRemovePopup(true);
  }
  function trickleUp(value, newList, currentPosition, parentPosition) {
    while (currentPosition > 0 && newList[parentPosition] < value) {
      newList[currentPosition] = newList[parentPosition];
      currentPosition = parentPosition;
      parentPosition = Math.floor((parentPosition - 1) / 2);
    }
    newList[currentPosition] = value;
    setList(newList);
  }
  function displayStatus() {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
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
      {
        <Transition
          show={isOpen}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <span className="flex justify-center mt-8 text-gray-400 text-lg transition duration-500 ease-in-out">
            {statusMessage}
          </span>
        </Transition>
      }
      {label === "Linked-List" ? (
        <Linkedlist listData={list} removal={removalIdx} />
      ) : label === "Binary-Search-Tree" ? (
        <Bst listData={list} />
      ) : label === "Max-Heap" ? (
        <Heap listData={list} />
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

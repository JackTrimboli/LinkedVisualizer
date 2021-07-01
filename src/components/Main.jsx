import { useState, React } from "react";
import Select from "react-select";
import Linkedlist from "./Linkedlist";
import Bst from "./Bst";
import Heap from "./Heap";

function Main(props) {
  const [list, setList] = useState([]);
  const [label, setLabel] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [addModalData, setAddModalData] = useState();
  const [removeModalData, setRemoveModalData] = useState();
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
    singleValue: (provided) => {
      return { ...provided };
    },
  };
  function handleSelectChange(selectData) {
    if (selectData.value === 1) {
      setLabel("Linked-List");
      console.log("Link-list Selected. The List is empty.");
    } else if (selectData.value === 2) {
      setLabel("Binary-Search-Tree");
      console.log("BST Selected. The List is empty.");
    } else if (selectData.value === 3) {
      setLabel("Heap");
      console.log("Heap Selected. The List is empty.");
    }
    setList([]);
  }
  function handleAddNode() {
    if (!label) {
      console.log("Pick a structure first!");
      return;
    }
    setShowAddModal(false);
    setList([...list, addModalData]);
    setAddModalData(null);
  }
  function handleRemoveNode() {
    console.log("Removal attempt made. Current List: " + list.toLocaleString());
    setShowRemoveModal(false);
    if (label && list.length > 0) {
      let index = list.indexOf(removeModalData);
      setRemovalIdx(index);
      let newList = [...list];
      newList.splice(index, 1);
      setList(newList);
    } else {
      console.log("You cannot remove data from an empty structure.");
    }
    console.log("List After Removal: " + list.toLocaleString());
    setRemoveModalData(null);
  }
  // function displayCurrentList() {
  //   console.log(list.toLocaleString());
  // } FOR TESTING PURPOSES
  return (
    <div className="box-border w-full h-full">
      <nav className="bg-blue-500 h-16 min-w-full text-white shadow-md p-3.5">
        <button className="ml-8 mr-8">Linked Visualizer</button>
        <button
          className="relative ml-8 mr-8"
          onClick={() => setShowAddModal(true)}
        >
          Add Node
        </button>
        <button
          className="relative ml-8 mr-8"
          onClick={() => setShowRemoveModal(true)}
        >
          Remove Node
        </button>
        {/* ONLY FOR TESTING PURPOSES
         <button className="relative ml-8 mr-8" onClick={displayCurrentList}>
          Display List
        </button> */}
        <Select
          autoFocus={true}
          onChange={handleSelectChange}
          options={options}
          className="w-32 text-black-400 inline-block"
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
        <Bst listData={list} removal={removalIdx} />
      ) : label === "Heap" ? (
        <Heap listData={list} removal={removalIdx} />
      ) : null}

      {showAddModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Enter Value to Add:
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowAddModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto items-center">
                  <input
                    type="number"
                    placeholder="Enter a number"
                    className="my-4 ml-5 text-blueGray-500 text-lg leading-relaxed text-center"
                    onChange={(e) => setAddModalData(e.target.value)}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleAddNode}
                  >
                    Add Node
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showRemoveModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Enter Value to Remove:
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowRemoveModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto items-center">
                  <input
                    type="number"
                    placeholder="Enter a number"
                    className="my-4 ml-5 text-blueGray-500 text-lg leading-relaxed text-center"
                    onChange={(e) => setRemoveModalData(e.target.value)}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowRemoveModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleRemoveNode}
                  >
                    Remove Node
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
export default Main;

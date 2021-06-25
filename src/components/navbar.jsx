import {useState, React} from 'react';
import Select from "react-select";
import Button from "./Button";

const Navbar = (props) => {
  const [dropValue, setDropValue] = useState(0) //state is 0 by default
  const options = [
    { value: 1, label: "Linked-List" },
    { value: 2, label: "Binary Search Tree" },
    { value: 3, label: "Heap" },
  ];

  function handleSelectChange(event){
    setDropValue(event.value);
  }
  return (
    <nav className="bg-blue-500 h-16 min-w-full text-white shadow-md p-3.5">
      <Button text="Linked Visualizer"></Button>
      <Button text="Add Node"></Button>
      <Button text="Remove Node"></Button>
      {/*<Navdropdown className="text-black"></Navdropdown>*/}
      <Select
      value={dropValue}
      onChange={handleSelectChange}
      options={options}
      className="inline-block w-16"
      simpleValue
    />
    </nav>
  );
};


export default Navbar;

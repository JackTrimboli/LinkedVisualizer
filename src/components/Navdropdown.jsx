import React from "react";
import Select from "react-select";

const options = [
  { value: 1, label: "Linked-List" },
  { value: 2, label: "Binary Search Tree" },
  { value: 3, label: "Heap" },
];
const Navdropdown = () => {
  return (
    <Select
      style={{ display: "inline-block" }}
      options={options}
      autosize={true}
      className="inline-block  "
      clearable={false}
      simpleValue
    ></Select>
  );
};

export default Navdropdown;

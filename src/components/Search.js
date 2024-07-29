import React, { useState } from "react";
import "../css/search.css";
import Select from "react-select";

export function Search() {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();

  // Array of all options
  const optionList = [];
  fetch("http://localhost:5288/api/Products/many")
  .then((response)=>{return response.json()})
  .then((jsonStr)=>{jsonStr.map((el)=>(optionList.push({value: el.name, label: el.name, id:el.id})))})
  // Function triggered on selection
  function handleSelect(data) {
    window.history.pushState({}, undefined, "/product/"+data.id);
    window.history.go();
  }

  return (
    <div className="search">
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Поиск"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
        />
      </div>
    </div>
  );
}
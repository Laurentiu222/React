import React, { useState, useCallback } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }){

  function handleTermChange(event){
    const newSearch = event.target.value;
    onSearch(newSearch);
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song Title" onChange={handleTermChange}/>
      <button className="SearchButton">
        SEARCH
      </button>
    </div>
  );
};



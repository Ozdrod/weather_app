import React from 'react';


export default function SearchBar({onSearch}) {
  // acá va tu código
    const handleOnSearch = () => {
      const input = document.getElementById("searchInput");
      onSearch(input.value);
      input.value = "";
    };

  return <div>
    <input
    id="searchInput"
    placeholder="Buscar una ciudad..."
    onKeyPress={(e) => {
      if (e.key === "Enter") handleOnSearch();
    }}
    />
    <button onClick={handleOnSearch}>
    Buscar
    </button>
  </div>
};
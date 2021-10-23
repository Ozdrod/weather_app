<<<<<<< Updated upstream
import React from 'react';
=======
import { func } from "prop-types";
import React from "react";
import styles from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";
>>>>>>> Stashed changes


<<<<<<< Updated upstream
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
=======
  return (
    <form className={styles.searchBar}>
      <input
        id="searchInput"
        placeholder="Buscar una ciudad..."
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleOnSearch}
      />
      <button type="submit" onClick={handleOnSearch}>
        <IoSearchOutline />
      </button>
    </form>
  );
}
>>>>>>> Stashed changes

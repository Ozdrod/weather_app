import React from "react";
import styles from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({onSearch}) {
  
  const [search, setSearch] = React.useState("");


  const handleOnSearch = (event) => {
    event.preventDefault();
    onSearch(search);
    setSearch("");
  }
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
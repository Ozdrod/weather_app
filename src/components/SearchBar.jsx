import { func } from "prop-types";
import React from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = React.useState("");
  const handleOnSearch = (event) => {
    event.preventDefault();
    if (typeof onSearch === "function") {
      onSearch(search);
      setSearch("");
    }
  };

  return (
    <form>
      <input
        id="searchInput"
        placeholder="Buscar una ciudad..."
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleOnSearch}
      />
      <button type="submit" onClick={handleOnSearch}>Buscar</button>
    </form>
  );
}

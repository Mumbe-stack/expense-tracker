import React from 'react';

function Search({ onSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search by name or description"
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

export default Search;
import React from 'react';

function Search({ onSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search by name or description..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default Search;
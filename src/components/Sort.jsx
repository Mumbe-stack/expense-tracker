import React from 'react';

function Sort({ onSort }) {
  return (
    <div className="sort">
      <button onClick={() => onSort('description')}>Sort by Description</button>
      <button onClick={() => onSort('category')}>Sort by Category</button>
      <button onClick={() => onSort('')}>Delete</button>
    </div>
  );
}

export default Sort;
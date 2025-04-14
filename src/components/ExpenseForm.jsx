import React, { useState } from 'react';

function ExpenseForm({ onAdd }) {
  const [data, setData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(data);
    setData({ name: '', description: '', category: '', amount: '', date: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>
      {Object.keys(data).map((key) => (
  <input
    key={key}
    name={key}
    placeholder={
      key[0].toUpperCase() + key.substring(1)
    }
  
    type={key === 'amount' ? 'number' : key === 'date' ? 'date' : 'text'}
    value={data[key]}
    onChange={handleChange}
    required
  />
))}
      <button type="submit">+Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
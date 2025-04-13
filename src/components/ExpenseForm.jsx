import React, { useState } from 'react';

function ExpenseForm({ onAdd }) {
  const [data, setData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(data);
    setData({ name: '', description: '', category: '', amount: '', date: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>
      <input name="name" placeholder="Name" value={data.name} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={data.description} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={data.category} onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" value={data.amount} onChange={handleChange} required />
      <input name="date" type="date" value={data.date} onChange={handleChange} required />
      <button type="submit">+Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import Search from './components/SearchBar';
import Sort from './components/Sort';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (index) => {
    const updated = expenses.filter((_, i) => i !== index);
    setExpenses(updated);
  };

  const visibleExpenses = [...expenses]
    .filter(exp => 
      exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sort) return 0;
      return a[sort].toLowerCase().localeCompare(b[sort].toLowerCase());
    });

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <p>Keep track of your spending!</p>

      <div className="main">
        <ExpenseForm onAdd={addExpense} />
        <div className="table-area">
          <Search onSearch={setSearch} />
          <Sort onSort={setSort} />
          <ExpenseTable expenses={visibleExpenses} onDelete={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
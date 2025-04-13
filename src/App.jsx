import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import Search from './components/SearchBar';
import Sort from './components/Sort';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    {
      name: 'Grocery Shopping',
      description: 'Weekly groceries from the supermarket',
      category: 'Food',
      amount: 50,
      date: '2025-04-10'
    },
    {
      name: 'Electricity Bill',
      description: 'KPLC Tokens for the month',
      category: 'Utilities',
      amount: 30,
      date: '2025-04-08'
    },
    {
      name: 'Water Bill',
      description: 'Water billing for the month',
      category: 'Bills',
      amount: 25,
      date: '2025-04-08'
    },
    {
      name: 'Rent',
      description: 'Rent for the month',
      category: 'Bills',
      amount: 100,
      date: '2025-04-05'
    },{
      name: 'House Essentials Shopping',
      description: 'Shopping expenditure for the month',
      category: 'Basics',
      amount: 80,
      date: '2025-04-10'
    },
    {
      name: 'Internet Subscription',
      description: 'Monthly WiFi payment',
      category: 'Services',
      amount: 20,
      date: '2025-04-15'
    }
  ]);

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
      exp.name.toLowerCase().includes(search.toLowerCase()) ||
      exp.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (!sort) return 0;
      return a[sort].toLowerCase().localeCompare(b[sort].toLowerCase());
    });

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <p>Learn more about your financial discipline and keep track of your spending!</p>

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
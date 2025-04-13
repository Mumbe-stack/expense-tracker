import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 

function ExpenseTable({ expenses, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp, index) => (
          <tr key={index}>
            <td>{exp.name}</td>
            <td>{exp.description}</td>
            <td>{exp.category}</td>
            <td>${exp.amount}</td>
            <td>{exp.date}</td>
            <td>
              <button className="delete-btn" onClick={() => onDelete(index)}>
                <FontAwesomeIcon icon={faTrash} style={{ color: 'red'}} /> 

              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
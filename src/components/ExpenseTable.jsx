import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const headers = ["Name", "Description", "Category", "Amount", "Date", "Action"];

function ExpenseTable({ expenses, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {expenses.map((item, index) => (
          <tr key={index}>
            {["name", "description", "category", "amount", "date"].map((key, subIndex) => (
              <td key={subIndex}>{key === "amount" ? `$${item[key]}` : item[key]}</td>
            ))}
            <td>
              <button onClick={() => onDelete(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;

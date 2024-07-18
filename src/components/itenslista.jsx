// src/components/ItemList.js
import React from 'react';

const ItemList = ({ items, editingIndex, currentText, setCurrentText, handleEdit, handleSave }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Save</button>
            </>
          ) : (
            <>
              {item}
              <button onClick={() => handleEdit(index)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

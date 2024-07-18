// src/components/ItemForm.js
import React, { useState } from 'react';

const ItemForm = ({ handleAddItem }) => {
  const [newItemText, setNewItemText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(newItemText);
    setNewItemText('');
  };

  return (
    <form className="add-item-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="New item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
// src/App.js
import React, { useState } from 'react';
import ItemForm from './components/itensforms';
import ItemList from './components/itenslista';
import './components/listaeditavel.css';

function App() {
  const [items, setItems] = useState(['Como treinar o seu dragrão 1', 'Como treinar o seu dragrão 2', 'Como treinar o seu dragrão 3']);
  const [editingIndex, setEditingIndex] = useState(null);
  const [currentText, setCurrentText] = useState('');

  const handleEdit = (index) => {
    setEditingIndex(index);
    setCurrentText(items[index]);
  };

  const handleSave = (index) => {
    const newItems = [...items];
    newItems[index] = currentText;
    setItems(newItems);
    setEditingIndex(null);
    setCurrentText('');
  };

  const handleDeleteLast = () => {
    setItems(items.slice(0, -1));
  };

  const handleDeleteAll = () => {
    setItems([]);
  };

  const handleAddItem = (newItemText) => {
    if (newItemText.trim()) {
      setItems([...items, newItemText.trim()]);
    }
  };

  return (
    <div className="container">
      <h1>Editable List</h1>
      <ItemForm handleAddItem={handleAddItem} />
      <ItemList
        items={items}
        editingIndex={editingIndex}
        currentText={currentText}
        setCurrentText={setCurrentText}
        handleEdit={handleEdit}
        handleSave={handleSave}
      />
      <div className="actions">
        <button onClick={handleDeleteLast} disabled={items.length === 0}>Delete Last Item</button>
        <button onClick={handleDeleteAll} disabled={items.length === 0}>Delete All Items</button>
      </div>
    </div>
  );
}

export default App;

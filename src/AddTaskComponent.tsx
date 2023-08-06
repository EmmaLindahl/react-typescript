import React, { useState } from 'react';
import { Item } from './Item';

interface AddTasktProps {
  onAddItem: (item: Item) => void;
  name: string;
}

const AddTask: React.FC<AddTasktProps> = ({ onAddItem, name }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      handleAddItem();
    }
  };

  const handleOnClick = () => {
    if (inputValue.trim() !== '') {
      handleAddItem();
    }
  };

  const handleAddItem = () => {
    const newItem: Item = {
      name: inputValue.trim(),
      done: false,
    };
    onAddItem(newItem);
    setInputValue('');
  }

  return (
    <div>
        <h3>{name}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter item name"
        onKeyDown={handleKeyDown}
        />
      <button onClick={handleOnClick}>Add Item</button>
    </div>
  );
};

export default AddTask;

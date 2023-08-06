import React, { useState } from 'react';
import FreeTextInput from './AddTaskComponent';
import ListComponent from './ListComponent';
import { Item } from './Item';

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]); 

  const handleAddItem = (item: Item) => {
    setItems([...items, item]);
  };

  const alterItem = (index: number) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setItems(updatedItems);
  };

  return (
    <div>
      
      <FreeTextInput onAddItem={handleAddItem} name='Add' />
      <ListComponent onAlterItem={alterItem} items={items} name='Todo' done={false} />
      <ListComponent onAlterItem={alterItem} items={items} name='Done' done={true}/>
    </div>
  );
};

export default App;

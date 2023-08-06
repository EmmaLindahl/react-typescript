import React from 'react';
import { Item } from './Item';

interface ListComponentProps {
  items: Item[];
  name: string;
  done: boolean;
  onAlterItem: (index: number) => void;

}

const ListComponent: React.FC<ListComponentProps> = ({ onAlterItem, items, name, done }) => {
    const handleItemClicked = (index: number) => {onAlterItem(index)}    

  return (
    <>
    <h3>{name}</h3>
    <ul>
      {items.filter(i => i.done === done).map((item, index) => (
        <li key={index} onClick={() => handleItemClicked(index)}>{item.name}</li>
      ))}
    </ul>
    </>
  );
};

export default ListComponent;

import React from 'react';

interface BuyListProps {
  items: string[];
}

const BuyList: React.FC<BuyListProps> = ({ items }) => {
  return (
   
    <ul>
         <h1>Compra de la semana</h1>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default BuyList;

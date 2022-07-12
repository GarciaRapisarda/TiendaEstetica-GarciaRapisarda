import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {  
  return (
    <div>{
       items.map(({ id, title, description, price, image }) => (
    <Item 
    key={id}    
    title={title}
    description={description}
    price={price}
    image={image} /> 
    ))} 

    </div>
  );
};

export default ItemList;
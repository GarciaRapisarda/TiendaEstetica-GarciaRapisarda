import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {  
  return (
    <div>{
       items.map(({ id, category, title, description, price, image }) => (
    <Item 
    key={id}
    category={category}    
    title={title}
    description={description}
    price={price}
    image={image} /> 
    ))} 

    </div>
  );
};

export default ItemList;
import React from 'react';
import Item from '../Item';
import ItemDetailContainer from '../ItemDetailContainer';
import "./style.css";

const ItemList = ({items}) => {  
  return (
    <div className='item-list-container'>{
       items.map(({ id, category, rating, title, description, price, image }) => (
    <Item 
    key={id}
    category={category} 
    rating={rating}
    title={title}
    description={description}
    price={price}
    image={image}
    categoryId={category}
    id={id} /> 
    ))} 
    <ItemDetailContainer />

    </div>
  );
};

export default ItemList;
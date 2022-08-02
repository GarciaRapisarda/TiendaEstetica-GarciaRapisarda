import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import { getItemList } from './firebase';



const ItemListContainer = ({ greeting }) => {
  

 
  const [loading, setLoading] = useState(true);
  
  const [list, setItems] = useState([]);

  useEffect(() => {
    getItemList().then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    })
    .finally(() => { setLoading(false) })
  }, []);

 
  

  return (
    <div className='bg-dark text-white'>
      {greeting}
      
      {loading ? <div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : <ItemList items={list} />}
      
    </div>

  );
};


export default ItemListContainer;
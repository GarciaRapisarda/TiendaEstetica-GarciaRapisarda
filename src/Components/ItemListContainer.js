import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import { getItemList } from './firebase';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({ greeting }) => {
  

 
  const [loading, setLoading] = useState(true);
  const [list, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getItemList().then((snapshot) => {

      if (categoryId) {
        setItems(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })).filter(item => item.categoryId === categoryId));
      } else {
      setItems(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    } }).finally(() => { setLoading(false) });
  }, [categoryId]);

 
  

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
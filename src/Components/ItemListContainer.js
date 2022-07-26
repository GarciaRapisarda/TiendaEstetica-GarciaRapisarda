import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList/ItemList';




const ItemListContainer = ({ greeting }) => {
  function onAddCallBack(n) {
    if (n === 0) {
      alert("No hay productos para agregar");
    } else if (n === 1) {
      alert(`Seleccionaste ${n} producto`);
    } else {
      alert(`Seleccionaste ${n} productos`)
    }
  }

  const [lista, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  /* const getData = new Promise((resolve, reject) => {
    let afterPromises = true;
    // let afterPromises = false;
    setTimeout(() => {
      if (afterPromises) {
        resolve(products);
      } else {
        reject("Failed to get data");
      }
    }, 2000);
  }); */
  useEffect(() => {
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=> {
    setProducts(json)
  })
   .finally(() => { setLoading(false) })
  }, []);
  
  

  return (
    <div className='bg-dark text-white'>
      {greeting}
      <ItemCount stock={5} initial={1} onAdd={onAddCallBack} />
      {loading ? <div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : <ItemList items={lista} />}
      
    </div>

  );
};

export default ItemListContainer;
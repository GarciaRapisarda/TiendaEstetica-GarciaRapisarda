import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getItemById } from './firebase';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
   
const [detail, setItem] = useState([null]);
const [loading, setLoading] = useState(true);
const { id } = useParams();


useEffect(() => {
  getItemById(id).then((product) => setItem(product))
  .finally(() => { setLoading(false) }
  
  );
}, [id]);


    


console.log(detail)

return (
  <div>
      {loading ? <div className="spinner-grow text-danger" role="status">
<span className="visually-hidden">Loading...</span>
</div> : <ItemDetail item={detail} />}    
  </div>
)
};



export default ItemDetailContainer;
import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import getData from '../MockApi/index';


const ItemDetailContainer = () => {
    const [detail, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => { 
        getData
        .then(data => {
            setItem(data);
        })
        .catch(err => { console.log(err) })
        .finally(() => { setLoading(false) })
        
    }, []);
    
 

      
    return (
        <div>
            {loading ? <div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : <ItemDetail item={detail} />}    
        </div>
    )
};

export default ItemDetailContainer
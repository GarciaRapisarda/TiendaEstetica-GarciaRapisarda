import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import getData from '../MockApi';


const ItemDetailContainer = () => {
    const [detail, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(detail);
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
            {loading ? <div>Loading...</div> : <ItemDetail item={detail} />}    
        </div>
    )
};

export default ItemDetailContainer
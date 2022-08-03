import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getItemById } from './firebase';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    /* const [detail, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const getData = new Promise((resolve, reject) => {
        let afterPromises = true;
        // let afterPromises = false;
        setTimeout(() => {
          if (afterPromises) {
            resolve(productos);
          } else {
            reject("Failed to get data");
          }
        }, 2000);
      });
    
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
}; */
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
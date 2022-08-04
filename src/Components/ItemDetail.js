import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./Context/CartContext";    


const ItemDetail = ({item}) => {
    const [irAlCarrito, setIrAlCarrito] = useState(false);
    const {agregarItem} = useContext(CartContext)

    const onAdd = ( quantity) => {
        setIrAlCarrito(true);
        agregarItem(item, quantity);
    }

  

  return (
    <div>

        <div className="container">
        <div className="row">
      
            <div className="card" style={{ "width": "18rem" }}>
                <img src={item.imageId} className="card-img-top" alt="..." />
                <div className="card-body">
                    
                    <h5 className="card-title text-dark">{item.category}</h5>
                    
                    <h5 className="card-title text-dark">{item.title}</h5>
                    
                    <p className="card-text text-dark">{item.description}</p>
                    <div className="btn btn-primary">${item.price}</div>
                    { irAlCarrito ?
                    <div><Link to="/Cart"><button type="button" className="btn btn-primary">Ir al Carrito</button>
                    </Link> 
                    <Link to="/"><button type="button" className="btn btn-primary">Volver a la Tienda</button>
                    </Link></div>:
                    <ItemCount stock={5} initial={1} onAdd={onAdd} />
         }

                </div>
            </div>
        </div>
    </div>
 

   </div>
     );
    };


export default ItemDetail;
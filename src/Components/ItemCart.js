import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext';

const ItemCart = ({product}) => {
    const {eliminarItem} = useContext(CartContext);
  return (
    <div className="card mb-3" style={{ maxWidth:540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.imageId} className="img-fluid rounded-start" alt={product.id}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <div className="btn btn-primary">${product.price}</div>
        <p><strong>Cantidad : {product.quantity}</strong></p>
        <button type="button" className="btn btn-danger" onClick={() => eliminarItem(product)}>Eliminar Producto</button>
      </div>
    </div>
  </div>
</div>
    

  )
}

export default ItemCart 
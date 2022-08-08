import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom';






const Cart = () => {
  const { listaDeProductos, totalPrice} = useContext(CartContext)
console.log(listaDeProductos)
  
  

  if (listaDeProductos.length === 0) {

return (
    <div>
      <div className="alert alert-danger" role="alert">
  No hay productos en el carrito!!
  <Link to="/">Volver a la tienda</Link>
   </div>
        
    </div>
  )
}

return (
  <div>{
    
    listaDeProductos.map(product => ( <ItemCart key={product.id} product={product} /> ))
    
  } 
  <p> 
    <strong>Total: ${totalPrice()}</strong>
  </p>
  <Link to="/Formulario">
  <button>CheckOut</button>
  </Link>
     </div>
)
}

export default Cart
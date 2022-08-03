import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'





const Cart = () => {
  const { listaDeProductos, totalPrice} = useContext(CartContext)

  if (listaDeProductos.length === 0) {

return (
    <div>
      <div className="alert alert-danger" role="alert">
  No hay productos en el carrito!!
   </div>
        
    </div>
  )
}

return (
  <div>Cart </div>
)
}

export default Cart
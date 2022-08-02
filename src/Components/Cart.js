import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'





const Cart = () => {
  const { cart, totalPrice} = useContext(CartContext)

  if (cart.length === 0) {

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
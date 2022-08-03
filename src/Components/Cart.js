import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'
import ItemCart from './ItemCart'





const Cart = () => {
  const { listaDeProductos, totalPrice} = useContext(CartContext)

  const ordenDeCompra = {
    cliente: {
      nombre: "Juan De La Cruz",
      email: "Juan@gmail.com",
      telefono: "123456789",
      direccion: "Calle falsa 123"

    },
    items: listaDeProductos.map(product =>({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    total: totalPrice()
  }

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
  <div>{
    listaDeProductos.map(product => <ItemCart key={product.id} product={product} />)
  }
    
    Cart </div>
)
}

export default Cart
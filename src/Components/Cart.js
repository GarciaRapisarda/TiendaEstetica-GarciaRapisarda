import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'
import ItemCart from './ItemCart'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';





const Cart = () => {
  const { listaDeProductos, totalPrice} = useContext(CartContext)
console.log(listaDeProductos)
  const ordenDeCompra = {
    cliente: {
      nombre: "Juan De La Cruz",
      email: "Juan@gmail.com",
      telefono: "123456789",
      direccion: "Calle falsa 123"

    },
    items: listaDeProductos.map(product =>({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, ordenDeCompra)
    .then(({id}) => { console.log(id)})
  }

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
  <button onClick={handleClick}>Realizar Orden</button>
     </div>
)
}

export default Cart
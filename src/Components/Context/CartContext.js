import React, { createContext, useState } from 'react'

export const CartContext = createContext({});



export const CartContextProvider = ({children, defaultValue}) => {
  const product = []

  const [cart, setCart] = useState(product);
// Agrego al Carrito
  const addToCart = (products) => {
    setCart([...cart, products]);
  }
// Remuevo del Carrito
 const removeFromCart = (id) => {
  setCart(cart.splice(id));
 };
 //Vaciar Carrito
  const clearCart = () => {
    setCart([]);
  }

  const totalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  }

  const totalProducts = () => {
    cart.reduce((acumulador, product) => acumulador + product.quantity, 0);
  }

  
  
  console.log(cart)
  
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, totalPrice, totalProducts}}>
      {children}
    </CartContext.Provider>
  )
}
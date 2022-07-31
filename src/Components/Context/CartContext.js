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
  
  
  console.log(cart)
  
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

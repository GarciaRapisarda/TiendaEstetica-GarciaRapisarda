import React, { createContext, useState } from 'react'

export const CartContext = createContext({});



export const CartContextProvider = ({children, defaultValue}) => {
  const product = [
    
    
         
  ]

  const [cart, setCart] = useState(product);

  const addToCart = (products) => {
    setCart([...cart, products]);
  }

  console.log(cart)
  
  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

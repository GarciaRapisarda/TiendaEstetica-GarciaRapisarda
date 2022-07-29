import React, { createContext } from 'react'

export const CartContext = createContext({});


export const CartContextProvider = ({children, defaultValue}) => {
  return (
    <CartContext.Provider value={"Desde cartcontext"}>
      {children}
    </CartContext.Provider>
  )
}

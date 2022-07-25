import React, { createContext } from 'react'

const CartContext = createContext({});

export const CartContextProvider = () => {
  return (
    <div>CartContext</div>
  )
}

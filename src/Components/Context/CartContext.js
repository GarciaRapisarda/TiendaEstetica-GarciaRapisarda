import React, { createContext, useState } from 'react'

export const CartContext = createContext({});



export const CartContextProvider = ({children, defaultValue}) => {
  const [listaDeProductos, setListaDeProductos] = useState([]);

  /* const agregarItem = (product) => {
    const repeatedItemIndex = listaDeProductos.findIndex(
      (item) => item.id === product.id
    );
    if (repeatedItemIndex !== -1) {
      setListaDeProductos(
        listaDeProductos.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        )
      );
    } else {
      setListaDeProductos([product, ...listaDeProductos]);
    }
  }; */

  const agregarItem = (product, quantity) => {
    let newCarrito;
    let prod = listaDeProductos.find(prod => prod.id === product.id);
    if (prod) { 
      prod.quantity += quantity;
      newCarrito = [...listaDeProductos];
    } else {
      prod = {...product, quantity: quantity};
      newCarrito = [...listaDeProductos, prod];
    }
    setListaDeProductos(newCarrito);
  }

  const eliminarItem = (product) => {
    const newCarrito = listaDeProductos.filter(prod => prod.id !== product.id);
    setListaDeProductos(newCarrito);
  }

    

  const clearCart = () => {
    setListaDeProductos([]);
  };

  const isInCart = (id) => {
    return listaDeProductos.map((p) => p.id).indexOf(id) !== -1;
  };

  const totalProducts = () => {
    return listaDeProductos.reduce((total, value) => {
      return total + value.quantity;
    }, 0);
  };

  const totalPrice = () => {
    return listaDeProductos.reduce((total, value) => {
      return total + value.price * value.quantity;
    }, 0);
  };



 /*  const [cart, setCart] = useState(product);
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

  
  
  console.log(cart) */

  console.log(listaDeProductos)
  
  return (
    <CartContext.Provider value={{listaDeProductos, agregarItem, eliminarItem, clearCart, isInCart, totalPrice, totalProducts}}>
      {children}
    </CartContext.Provider>
  )
}
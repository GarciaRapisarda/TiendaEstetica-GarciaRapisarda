import React, { createContext, useState } from 'react'
import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore';
export const CartContext = createContext({});




export const CartContextProvider = ({children}) => {
  const [listaDeProductos, setListaDeProductos] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [compra,setCompra] = useState("");

  

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
    setCompra(false);
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

  const manejarCompra = (e) => {
    e.preventDefault();
    
    const date = new Date();


    const buyerData = {
        buyer : {
            name, 
            phone, 
            email, 
            confirmEmail
        }, 

        items: listaDeProductos.map(product =>({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })), 
        date: Timestamp.fromDate(date),
        total: totalPrice()
    }

    setCompra(buyerData);

    const db = getFirestore();
    const OrderCollection = collection(db, 'orders');
    addDoc(OrderCollection, buyerData)

    .then((res) => {
      console.log(res.id)
      
        .then((querySnapshot) =>{
            if(!querySnapshot.exists){
                console.log("No existe")
            } else {
                setCompra({
                    id: querySnapshot.id, 
                    ...querySnapshot.data()
                })
            }
        })
        .catch(error => console.log(error))
    })
}




  console.log(listaDeProductos)
  
  return (
    <CartContext.Provider value={{listaDeProductos, agregarItem, eliminarItem, clearCart, isInCart, totalPrice, totalProducts, setName, name, setPhone, phone, email, setEmail, setConfirmEmail, confirmEmail, manejarCompra, compra }}>
      {children}
    </CartContext.Provider>
  )
}
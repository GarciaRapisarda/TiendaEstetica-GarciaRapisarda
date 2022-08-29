/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
	const [listaDeProductos, setListaDeProductos] = useState([]);
	const [compra, setCompra] = useState('');

	const agregarItem = (product, quantity) => {
		let newCarrito;
		let prod = listaDeProductos.find(prod => prod.id === product.id);
		if (prod) {
			prod.quantity += quantity;
			newCarrito = [...listaDeProductos];
		} else {
			prod = { ...product, quantity };
			newCarrito = [...listaDeProductos, prod];
		}
		setListaDeProductos(newCarrito);
	};

	const eliminarItem = product => {
		const newCarrito = listaDeProductos.filter(prod => prod.id !== product.id);
		setListaDeProductos(newCarrito);
	};

	const clearCart = () => {
		setListaDeProductos([]);
		setCompra(false);
	};

	const isInCart = id => {
		return listaDeProductos.map(p => p.id).indexOf(id) !== -1;
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

	return (
		<CartContext.Provider
			value={{
				listaDeProductos,
				agregarItem,
				eliminarItem,
				clearCart,
				isInCart,
				totalPrice,
				totalProducts,
				compra,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

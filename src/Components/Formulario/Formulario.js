import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import {
	Timestamp,
	addDoc,
	collection,
	getFirestore,
} from 'firebase/firestore';
import './style.css';

function Formulario() {
	const { totalPrice, listaDeProductos, clearCart } = useContext(CartContext);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [confirmEmail, setConfirmEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [compra, setCompra] = useState('');

	const manejarCompra = e => {
		e.preventDefault();

		const date = new Date();

		const buyerData = {
			buyer: {
				name,
				phone,
				email,
				confirmEmail,
			},

			items: listaDeProductos.map(product => ({
				id: product.id,
				title: product.title,
				price: product.price,
				quantity: product.quantity,
			})),
			date: Timestamp.fromDate(date),
			total: totalPrice(),
		};

		setCompra(buyerData);

		const db = getFirestore();
		const OrderCollection = collection(db, 'orders');
		addDoc(OrderCollection, buyerData).then(res => {
			console
				.log(res.id)

				.then(querySnapshot => {
					if (!querySnapshot.exists) {
						console.log('No existe');
					} else {
						setCompra({
							id: querySnapshot.id,
							...querySnapshot.data(),
						});
					}
				})
				.catch(error => console.log(error));
		});
	};

	function onNameChange(evt) {
		setName(evt.target.value);
	}

	function onEmailChange(evt) {
		setEmail(evt.target.value);
	}

	function secondOnEmailChange(evt) {
		setConfirmEmail(evt.target.value);
	}

	function onPhoneChange(evt) {
		setPhone(evt.target.value);
	}

	return (
		<div className='formContainer'>
			<div className='explanation'>
				<h4 id='title'> ¡Confirmá tu compra! </h4>
				<p id='description'>Si ya tenés todo listo, confirmá tu compra</p>
			</div>
			<div>
				<form className='forms' onSubmit={manejarCompra}>
					<label id='name-label'> Nombre Completo: </label>
					<input
						required
						placeholder='Ingresá tu nombre'
						type='text'
						id='name'
						className='datos'
						onChange={evt => onNameChange(evt)}
					/>

					<label id='email-label'>Tu email:</label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Ingresá tu email'
						className='datos'
						required
						onChange={evt => onEmailChange(evt)}
					></input>

					<label id='secondond-email-label'>Confirmá tu email:</label>
					<input
						type='email'
						id='SecondEmail'
						name='email'
						placeholder='Ingresá nuevamente tu email'
						className='datos'
						required
						onChange={evt => secondOnEmailChange(evt)}
					></input>

					<label id='number-label'>Tu teléfono:</label>
					<input
						placeholder='Ingresá tu teléfono'
						required
						type='number'
						id='number'
						className='datos'
						onChange={evt => onPhoneChange(evt)}
					></input>

					<button
						type='submit'
						className='submitButton'
						disabled={
							!(
								name !== '' &&
								phone !== '' &&
								email !== '' &&
								confirmEmail === email
							)
						}
					>
						Comprar
					</button>
				</form>
			</div>
			<div id='confirmationText'>
				{compra ? (
					<>
						<div>
							<p>¡Muchas gracias, {compra.buyer.name}!</p>
							<p>Total de tu compra: ${compra.total}</p>
						</div>
						<Link to='/'>
							<button
								className='submitButton'
								onClick={() => {
									clearCart();
									setName('');
									setEmail('');
									setPhone('');
									setConfirmEmail('');
								}}
							>
								Volver a comprar
							</button>
						</Link>
					</>
				) : null}
			</div>
		</div>
	);
}

export default Formulario;

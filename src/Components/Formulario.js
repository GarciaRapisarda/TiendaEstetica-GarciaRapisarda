/* import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { CartContext } from './Context/CartContext';


const Formulario = () => {
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


  return (
    <div className='container'>
        <div className='row'>
            <h2>Completa tus Datos</h2>
            <div className='col-md-6'>
        <div className="input-group mt-5 mb-1">
  <span className="input-group-text" id="inputGroup-sizing-default">Nombre y Apellido</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />

</div>
<div className="input-group mb-1">
  <span className="input-group-text" id="inputGroup-sizing-default">E-Mail</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Dirección</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
</div>
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <Link to="/">
  <button className="btn btn-primary me-md-2" type="button">Volver a la Tienda</button>
  </Link>
  <button className="btn btn-primary" type="button">Finalizar orden</button>
</div>
</div>
</div>
    </div>
  )
}

export default Formulario */
import React, {useContext} from 'react';
import { CartContext } from './Context/CartContext';

function Formulario() {

    const { setName, setEmail, setPhone, manejarCompra, name, email, phone, setConfirmEmail, confirmEmail, compra } = useContext(CartContext);

    console.log(compra);

    function onNameChange(evt) {
        setName(evt.target.value);
    }

    function onEmailChange(evt) {
    setEmail(evt.target.value);
    }

    function  secondOnEmailChange(evt) {
        setConfirmEmail(evt.target.value)
    }

    function onPhoneChange(evt) {
    setPhone(evt.target.value);
    }


    return(
        <div className="formContainer">
            <div className="explanation">
                <h4 id="title"> ¡Confirmá tu compra! </h4>
                <p id="description">Si ya tenés todo listo, confirmá tu compra</p>
            </div>
            <div>
                <form className="forms" onSubmit={manejarCompra}>

                <label id="name-label"> Nombre Completo: </label>
                <input required placeholder="Ingresá tu nombre" type="text" id="name" className="datos" onChange={evt => onNameChange(evt)} />
                
                <label id="email-label">Tu email:</label>
                <input type="email" id="email" name="email" placeholder="Ingresá tu email" className="datos" required onChange={evt => onEmailChange(evt)}></input>
                
                <label id="secondond-email-label">Confirmá tu email:</label>
                <input type="email" id="SecondEmail" name="email" placeholder="Ingresá nuevamente tu email" className="datos" required onChange={evt => secondOnEmailChange(evt)}></input>
                
                <label id="number-label">Tu teléfono:</label>
                <input  placeholder="Ingresá tu teléfono" required type="number" id="number" className="datos" onChange={evt => onPhoneChange(evt)}></input>
                
                <button type="submit" className="submitButton" disabled={!(name !== "" && phone !== "" && email !== "" && confirmEmail === email )}>Comprar</button>
                </form>
            </div>
            <div id="confirmationText">
                {compra ? (
                    <>
                    <div>
                    <p>
                    ¡Muchas gracias, {compra.buyer.name}! 
                    </p>
                    <p>El id de tu compra es: {compra.id}</p>
                    <p>Total de tu compra: ${compra.total}</p>
                    </div>
                    </>
                ) : null }
            </div>
        </div>
    )
}

export default Formulario;
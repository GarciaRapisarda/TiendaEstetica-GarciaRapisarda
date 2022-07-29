import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import {CartContext} from './Context/CartContext'



const Detail = () => {
  function onAddCallBack(n) {
    if (n === 0) {
      alert("No hay productos para agregar");
    } else if (n === 1) {
      alert(`Seleccionaste ${n} producto`);
    } else {
      alert(`Seleccionaste ${n} productos`)
    }
  }
  let params = useParams()
  console.log(params)

const CartContextValue = useContext(CartContext)

  const [datos, setResultado] = useState([]);
  const [loading, setLoading] = useState(true);
      

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + params.id)
    .then(res=>res.json())
    .then(json=> {
      setResultado(json)
      console.log(json)
    })
     .finally(() => { setLoading(false) })
    }, [params.id]);
    
  if (loading) {
    return <div className="spinner-grow text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  }   

  return (
    <div><div className="d-inline-flex">
      <ItemCount stock={5} initial={1} onAdd={onAddCallBack} /></div>
      {datos && ( <div className='d-inline-flex justify-content-center pt-5'>
        <div className="card" style={{ "width": "18rem" }}>
        <img className='img-thumbnail img-fluid' style={{}} src={datos.image} alt={datos.name} />
        <p className="card-text text-dark"><strong>Rating</strong></p>
        <button type="button" className="btn btn-warning">{datos.rating.rate}</button>
        <div className="card-body">
        <h5 className="card-title text-dark">{datos.category}</h5>
        <h5 className="card-title text-dark">{datos.title}</h5>
        <p className="card-text text-dark">{datos.description}</p>
        <div className="btn btn-primary">${datos.price}</div>
      </div>
      </div>
      </div>)}
      <div>
        {CartContextValue}
      </div>
    </div>
  )
}

export default Detail
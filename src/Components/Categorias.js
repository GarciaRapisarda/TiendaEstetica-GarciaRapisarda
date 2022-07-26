import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Categorias = () => {
    let params = useParams()

  const [categoria, setResultado] = useState([]);
  const [loading, setLoading] = useState(true);
      

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + params.category)
    .then(res=>res.json())
    .then(json=> {
      setResultado(json)
      console.log(json)
    })
     .finally(() => { setLoading(false) })
    }, [params.category]);
    
  return (
    <div>{categoria && ( <div className='d-flex justify-content-center pt-5'>
    <div className="card" style={{ "width": "18rem" }}>
    <img src={categoria.image} alt={categoria.name} />
    <div className="card-body">
    <h5 className="card-title text-dark">{categoria.category}</h5>
    <h5 className="card-title text-dark">{categoria.title}</h5>
    <p className="card-text text-dark">{categoria.description}</p>
    <div className="btn btn-primary">${categoria.price}</div>
  </div>
  </div>
  </div>)}

    </div>
  )
}

export default Categorias
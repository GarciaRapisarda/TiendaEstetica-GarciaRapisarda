import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Categorias = () => {
    let params = useParams()

  const [categoria, setResultado] = useState([]);
  const [loading, setLoading] = useState(true);
      

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=> {
      setResultado(json)
      console.log(json)
    })
     .finally(() => { setLoading(false) })
    }, []);

    
    
  return (
    <div>
        <ul className="list-group">
            <li>{categoria.map((seccion) => {
                return <li className="list-group-item">
                    {seccion}
                </li>
            }

            )}</li></ul>
    </div>
  )
}

export default Categorias
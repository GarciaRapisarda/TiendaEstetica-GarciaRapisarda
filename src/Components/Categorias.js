import React, { useState, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Categorias = () => {
    let params = useParams()
    console.log(params)

    const [datos, setResultado] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then((json) => {
                setResultado(json)
                console.log(json)
            })
            .finally(() => { setLoading(false) })
    }, []);

    console.log(datos)


    if (loading) {
        return <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    return (
        <div className='d-flex justify-content-center pt-4'>
            {datos.filter(item => item.category === params.categoryId).map(item => (
                <div className="card" style={{ "maxWidth": "300px" }}>
                    <img src={item.image} alt={item.name} />
                    <div className="card-body">
                        <h5 className="card-title text-dark">{item.category}</h5>
                        <h5 className="card-title text-dark">{item.title}</h5>
                        <p className="card-text text-dark">{item.description}</p>
                        <div className="btn btn-primary">${item.price}</div>
                    </div>
                </div>
            ))}
            
          
        </div>
        
      
    )
}

export default Categorias
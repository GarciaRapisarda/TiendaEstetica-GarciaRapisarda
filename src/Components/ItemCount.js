import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const restar = () => {
        setCount(count - 1);
    }

    const sumar = () => {
        setCount(count + 1);
    }

    return (
        <div className="d-flex justify-content-center">
            <button className= "btn btn-secondary" disabled={count <= 1} onClick={restar}>-</button>
            <span className="btn btn-light">{count}</span>
            <button className="btn btn-dark" disabled={count >= stock} onClick={sumar}>+</button>
            <div>
                <button disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}


    
    /* const [count, setCount] = useState(initial);
    const [cantidad, setCantidad] = useState();
    const [botonera, setBotonera] = useState(true);
    const restar = () => {
        setCount((valAnt) => (valAnt > 0 ? count - 1 : count));
    }
    const sumar = () => {
        setCount(count + 1);
    };

    const toggleBotonera = () => {
    setBotonera(false);
    }

useEffect(() => {
    if (count > stock) {
        setCount(stock);
    }
    setCantidad(count);
}, [count]);

console.log(cantidad);



    return (
        <div>{! botonera &&  (
            <div className="d-inline-flex">Redirigiendo...</div>)}
            {botonera && (
            <div className="card text-center" >
                <div className="card-body">
                    <h5 className="card-title">Cantidad {count}</h5>
                    <p className="card-text">
                        <button onClick={restar} type="button" className="btn btn-danger">( - )</button>
                        <button onClick={sumar} type="button" className="btn btn-success">( + )</button>
                    </p>
                    <Link to="Cart">
                    <button onClick={ () => {
                        if (count <= stock) {
                            onAdd(count);
                        } else {
                            alert("No hay suficiente stock disponible!");
                        } {toggleBotonera()}
                    }   
                } type="button" className="btn btn-secondary btn-lg">Agregar al carrito</button>
                </Link>
                
                </div>
            </div>)}
        </div>
    );
}; */

export default ItemCount;
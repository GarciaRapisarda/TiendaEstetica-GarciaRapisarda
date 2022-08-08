import { useState } from "react";



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

export default ItemCount;
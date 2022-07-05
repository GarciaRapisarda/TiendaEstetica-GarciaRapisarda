import { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const restar = () => {
        setCount((valAnt) => (valAnt > 0 ? count - 1 : count));
    }
    const sumar = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={restar} type="button" className="btn btn-danger">( - )</button>
            <button onClick={sumar} type="button" className="btn btn-success">( + )</button>
            <button onClick={() => {
                if (count <= stock) {
                    onAdd(count);
                } else {
                    alert("No hay suficiente stock disponible!");
                }
            }
            } type="button" className="btn btn-secondary btn-lg">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
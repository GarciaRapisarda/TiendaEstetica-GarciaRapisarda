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
            <div className="card text-center" >
                <div className="card-body">
                    <h5 className="card-title">Cantidad {count}</h5>
                    <p className="card-text"><button onClick={restar} type="button" className="btn btn-danger">( - )</button>
                        <button onClick={sumar} type="button" className="btn btn-success">( + )</button>
                    </p>
                    <button onClick={() => {
                        if (count <= stock) {
                            onAdd(count);
                        } else {
                            alert("No hay suficiente stock disponible!");
                        }
                    }
                    } type="button" className="btn btn-secondary btn-lg">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
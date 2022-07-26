import React from "react";
import { Link } from "react-router-dom";






const Item = ({ id, title, category, description, price, image }) => {
    
    
    return (
        <div>
                           
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <Link to={"Categorias/" + category}>
                            <h5 className="card-title text-dark">{category}</h5>
                            </Link>
                            <Link to={"Item/" + id}>
                            <h5 className="card-title text-dark">{title}</h5>
                            </Link>
                            <p className="card-text text-dark">{description}</p>
                            <div className="btn btn-primary">${price}</div>
                        </div>
                    </div>
                </div>
            
        

    );
};

export default Item;


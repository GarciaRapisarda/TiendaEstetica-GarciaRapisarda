import React from "react";
import { Link } from "react-router-dom";




const Item = ({ id, title, category, description, price, image }) => {
    
    return (
        <div>
            <div className="container">
                <div className="row">
                
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <Link to={`/categorias/${id}`}>
                            <h5 className="card-title text-dark">{category}</h5>
                            </ Link>
                            <h5 className="card-title text-dark">{title}</h5>
                            
                            <p className="card-text text-dark">{description}</p>
                            <a href="#" className="btn btn-primary">${price}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Item;


import React from "react";
import { Link } from "react-router-dom";






const Item = ({ id, title, category, description, price, image, categoryId }) => {


    return (
        <div>
            <div className="card mb-3" style={{"maxWidth": "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid img-thumbnail rounded-start" alt={title}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <Link to={"Item/" + id}>
                            <h5 className="card-title">{title}</h5>
                            </Link>
                            <Link to={"Category/" + categoryId}>
                                <p className="card-text">{category}</p>
                            </Link>
                            <p className="card-text text-dark">{description}</p>
                            <div className="btn btn-primary">${price}</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>



    );
};

export default Item;


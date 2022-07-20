import React from "react";


const ItemDetail = ({item}) => {
  console.log(item)

  return (
    <div>{
      item.map(({ id, category, title, description, price, image }) => (
        <div className="container">
        <div className="row">
        
            <div className="card" style={{ "width": "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    
                    <h5 className="card-title text-dark">{category}</h5>
                    
                    <h5 className="card-title text-dark">{title}</h5>
                    
                    <p className="card-text text-dark">{description}</p>
                    <a href="#" className="btn btn-primary">${price}</a>
                </div>
            </div>
        </div>
    </div>
   ))} 

   </div>
     );
    };


export default ItemDetail;
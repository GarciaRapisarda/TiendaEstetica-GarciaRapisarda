import React from "react";


const ItemDetail = ({item}) => {
    console.log(item)
  
  

  return (
    <div>
        <div className="container">
        <div className="row">
      
            <div className="card" style={{ "width": "18rem" }}>
                <img src={item.imageId} className="card-img-top" alt="..." />
                <div className="card-body">
                    
                    <h5 className="card-title text-dark">{item.category}</h5>
                    
                    <h5 className="card-title text-dark">{item.title}</h5>
                    
                    <p className="card-text text-dark">{item.description}</p>
                    <div className="btn btn-primary">${item.price}</div>
                </div>
            </div>
        </div>
    </div>
 

   </div>
     );
    };


export default ItemDetail;
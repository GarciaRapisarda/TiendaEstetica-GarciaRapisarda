import React from 'react'

const ItemCart = ({ id, categoryId, title, description, price, imageId, rating  }) => {
  return (
    <div>
        <ul className="list-group list-group-flush">
  <li className="list-group-item">{title}</li>
  <li className="list-group-item">{description}</li>
  <li className="list-group-item">{price}</li>
  
</ul>
        ItemCart</div>
  )
}

export default ItemCart
/* eslint-disable react/prop-types */
import Item from '../Item';
import './style.css';

const ItemList = ({ items }) => {
	return (
		<div className='item-list-container'>
			{items.map(
				({ id, categoryId, title, description, price, imageId, rating }) => (
					<Item
						key={id}
						rating={rating}
						title={title}
						description={description}
						price={price}
						imageId={imageId}
						categoryId={categoryId}
						id={id}
					/>
				)
			)}
		</div>
	);
};

export default ItemList;

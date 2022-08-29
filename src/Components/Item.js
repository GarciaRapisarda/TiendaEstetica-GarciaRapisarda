/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Item = ({
	id,
	categoryId,
	title,
	description,
	price,
	imageId,
	rating,
}) => {
	return (
		<div>
			<div className='card mb-3' style={{ maxWidth: '540px' }}>
				<div className='row g-0'>
					<div className='col-md-4'>
						<img
							src={imageId}
							className='img-fluid img-thumbnail rounded-start'
							alt={title}
						/>
					</div>
					<div className='col-md-8'>
						<div className='card-body'>
							<Link to={'Item/' + id}>
								<h5 className='card-title'>{title}</h5>
							</Link>
							<p className='card-text d-inline-flex text-dark'>
								<strong>Rating</strong>
							</p>
							<button type='button' className='btn btn-warning'>
								{rating}
							</button>
							<Link to={'Category/' + categoryId}>
								<p className='card-text'>{categoryId}</p>
							</Link>
							<p className='card-text text-dark'>{description}</p>
							<div className='btn btn-primary'>${price}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;

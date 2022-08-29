/* eslint-disable react/no-unescaped-entities */
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-dark'>
			<div className='container-fluid'>
				<Link to='/'>
					<div className='navbar-brand text-white'>Estética Viáfara</div>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse justify-content-center'
					id='navbarNavAltMarkup'
				>
					<div className='navbar-nav '>
						<Link to='/'>
							<div className='nav-link text-white' aria-current='page'>
								Home
							</div>
						</Link>
						<Link to="/Category/men's%20clothing">
							<div className='nav-link text-white'>Men's Clothing</div>
						</Link>
						<Link to='/Category/jewelery'>
							<div className='nav-link text-white'>Jewelery</div>
						</Link>
						<Link to='/Category/electronics'>
							<div className='nav-link text-white'>Electronics</div>
						</Link>
					</div>
				</div>
				<CartWidget />
			</div>
		</nav>
	);
};

export default NavBar;

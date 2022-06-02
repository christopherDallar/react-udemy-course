import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	const handleLogout = () => {
		console.log('por hacer');
	};

	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
			<Link className='navbar-brand' to='/'>
				Home
			</Link>

			<div className='navbar-collapse'>
				<div className='navbar-nav'>
					<NavLink
						className={({ isActive }) =>
							'nav-item nav-link' + (isActive ? 'active' : '')
						}
						to='/marvel'
					>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							'nav-item nav-link' + (isActive ? 'active' : '')
						}
						to='/dc'
					>
						DC
					</NavLink>
				</div>
			</div>

			<div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
				<ul className='navbar-nav ml-auto'>
					<span className='nav-item nav-link text-info'>Christopher</span>

					<Link to='/login'>
						<button className='nav-item nav-link btn' onClick={handleLogout}>
							Logout
						</button>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		// <nav>
		// 	<ul>
		// 		<li>
		// 			<Link to='/'>Home</Link>
		// 		</li>
		// 		<li>
		// 			<Link to='/about'>About</Link>
		// 		</li>
		// 		<li>
		// 			<Link to='/login'>Login</Link>
		// 		</li>
		// 	</ul>
		// </nav>

		<nav className='navbar navbar-expand-sm bg-dark'>
			<div className='container-fluid'>
				<Link to='/' className='navbar-brand'>
					useContext
				</Link>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<NavLink activeClassName='active' to='/' className='nav-link'>
							Home
						</NavLink>
						<NavLink activeClassName='active' to='/about' className='nav-link'>
							About
						</NavLink>
						<NavLink activeClassName='active' to='/login' className='nav-link'>
							Login
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

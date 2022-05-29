import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-sm bg-dark'>
			<div className='container-fluid'>
				<Link to='/' className='navbar-brand'>
					useContext
				</Link>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<NavLink activeclassname='active' to='/' className='nav-link'>
							Home
						</NavLink>
						<NavLink activeclassname='active' to='/about' className='nav-link'>
							About
						</NavLink>
						<NavLink activeclassname='active' to='/login' className='nav-link'>
							Login
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

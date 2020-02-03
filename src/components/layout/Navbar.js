import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo.png';

const Header = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-inner'>
				<NavLink to={`${process.env.PUBLIC_URL}/`} className='navbar-logo'>
					<img src={Logo} className='hide-mobile' alt='logo' />
				</NavLink>
				<ul>
					<li>
						<NavLink exact={true} activeClassName='active' to={`${process.env.PUBLIC_URL}/`}>
							Home
            </NavLink>
					</li>
					<li>
						<NavLink to={`${process.env.PUBLIC_URL}/dashboard`} activeClassName='active'>
							Dashboard
            </NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;

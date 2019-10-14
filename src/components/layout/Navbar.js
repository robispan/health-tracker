import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo.svg';

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-inner'>
        <img src={Logo} className='hide-mobile' />
        <ul>
          <li>
            <NavLink exact={true} activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard' activeClassName='active'>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

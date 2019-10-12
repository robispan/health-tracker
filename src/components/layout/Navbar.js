import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo.svg';

const Header = () => {
  return (
    <nav className='navbar'>
      <img src={Logo} className='hide-mobile' />
      <ul>
        <li className='active'>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

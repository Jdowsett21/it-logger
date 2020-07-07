import React from 'react';
import { Link } from 'react-router-dom';

function NonAuthNavBar(props) {
  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <ul className='right hide-on-med-and-down'>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <Link to='/Login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NonAuthNavBar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/activation">Activation Routine</Link>
        </li>
        <li>
          <Link to="/recovery">Recovery Routine</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
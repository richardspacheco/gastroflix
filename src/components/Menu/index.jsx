import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

import Logo from '../../assets/img/logo.png';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="Gastroflix" className="Logo" />
      </Link>

      <Button.Menu as={Link} to="/my-list">
        Manage
      </Button.Menu>
    </nav>
  );
}

export default Menu;

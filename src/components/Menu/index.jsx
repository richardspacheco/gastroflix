import React from 'react';
import { Link } from 'react-router-dom';

import { Logo, MenuContainer } from './styles';
import LogoImage from '../../assets/img/logo.png';
import Button from '../Button';

function Menu() {
  return (
    <MenuContainer>
      <Link to="/">
        <Logo src={LogoImage} alt="Gastroflix" />
      </Link>

      <Button.Menu as={Link} to="/my-list">
        Manage
      </Button.Menu>
    </MenuContainer>
  );
}

export default Menu;

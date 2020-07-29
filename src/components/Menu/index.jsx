import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

import Logo from '../../assets/img/logo.png'
import Button from '../Button'

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="ASMRFLIX" className="Logo" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  )
}
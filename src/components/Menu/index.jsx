import React from 'react'
import './Menu.css'

import Logo from '../../assets/img/logo.png'
import Button from '../Button'

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="ASMRFLIX" className="Logo" />
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  )
}
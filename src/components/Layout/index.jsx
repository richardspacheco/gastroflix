import React from 'react'
import styled from 'styled-components'

import Menu from '../Menu'
import Footer from '../Footer'

const Container = styled.main`
  flex: 1;
  padding: 50px 5% 0 5%;
  background-color: var(--black);
  color: var(--white);
`

export default function Layout(props) {
  return (
    <>
      <Menu />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </>
  )
}
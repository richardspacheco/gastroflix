import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Container = styled.main`
  flex: 1;
  padding: 50px 5% 0 5%;
  background-color: var(--grayDark);
  color: var(--white);
`;

function Layout({ children }) {
  return (
    <>
      <Menu />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Container = styled.main`
  flex: 1;
  padding: ${(props) => (props.noPadding ? '' : '32px 5% 0 5%')};
  background-color: var(--gray);
`;

function Layout({ children, noPadding }) {
  return (
    <>
      <Menu />
      <Container
        noPadding={noPadding}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  noPadding: false,
};

Layout.propTypes = {
  noPadding: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;

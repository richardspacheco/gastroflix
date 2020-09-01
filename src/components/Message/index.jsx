import React from 'react';
import PropTypes from 'prop-types';
import { ErrorOutline } from '@styled-icons/material';

import { Container } from './styles';

function Message({ error, style, children }) {
  return (
    <Container style={style}>
      {error && <ErrorOutline size="24" style={{ marginRight: '8px' }} />}
      {children}
    </Container>
  );
}

Message.defaultProps = {
  error: false,
  style: {},
  children: 'Error',
};

Message.propTypes = {
  error: PropTypes.bool,
  style: PropTypes.shape({
    margin: PropTypes.string,
    width: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default Message;

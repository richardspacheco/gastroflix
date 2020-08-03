import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Background, Container } from './styles';

function Modal({ display, toggleModal, children }) {
  let target = null;
  function getTarget(e) {
    target = e.target.id;
  }

  function handleClose() {
    if (target === 'modal-bg') toggleModal();
  }

  return (
    display && ReactDOM.createPortal(
      <Background
        id="modal-bg"
        onMouseDown={getTarget}
        onClick={handleClose}
      >
        <Container>
          {children}
        </Container>
      </Background>,
      document.body,
    )
  );
}

Modal.defaultProps = {
  display: false,
};

Modal.propTypes = {
  display: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

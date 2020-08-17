import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Spinner2 } from '@styled-icons/evil';

const spin = keyframes`
  from {}
  to { transform: rotate(360deg) }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`;

const Spinner = styled(Spinner2)`
  width: 64px;
  animation: 1.5s ${spin} infinite;

  & * {
    color: red;
  }
`;

function Loading() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}

export default Loading;

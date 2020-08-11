import styled from 'styled-components';

export const Background = styled.div`
  background-color: rgb(0 0 0 / .8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: var(--gray);
  padding: 16px;
  border-radius: 4px;
`;

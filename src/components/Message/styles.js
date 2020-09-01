/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 1rem;
  background-color: white;
  color: var(--primary);
  width: 100%;
  min-height: 40px;

  & * {
    color: var(--primary);
  }
`;

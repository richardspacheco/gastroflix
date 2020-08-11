/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: black;
  border-top: 2px solid var(--primary);
  padding: 16px;
  text-align: center;

  & > p {
    margin: 0;
  }
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

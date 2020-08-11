import styled from 'styled-components'

export const Logo = styled.img`
  margin-top: 8px;
  height: calc(var(--navbar-height) * .75);
`;

export const MenuContainer = styled.nav`
  width: 100%;
  height: var(--navbar-height);
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: black;
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    & {
      justify-content: center;
    }
  }
`;

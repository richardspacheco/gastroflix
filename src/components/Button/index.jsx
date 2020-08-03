import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--primary);
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 4px;
  text-decoration: none;
  transition: opacity .3s;
  height: 50px;

  &:hover,
  &:focus {
    color: var(--gray);
  }
`;

Button.Primary = styled(Button)`
  width: 100%;
`;

Button.Menu = styled(Button)`
  background-color: transparent;
  padding: 16px;

  &:hover,
  &:focus {
    color: var(--primary);
  }

  @media (max-width: 800px) {
    & {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }

    &:hover,
    &:focus {
      color: var(--gray);
    }
  }
`;

export default Button;

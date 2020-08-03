/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 0;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  --cardWidth: 20vw;
  flex: 0 0 var(--cardWidth);
  width: var(--cardWidth);
  height: calc(var(--cardWidth) * 9 / 16);
  background-image: ${({ thumbnail }) => `url(${thumbnail})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;

  transition: opacity .3s;
  &:hover::before,
  &:focus::before {
    content: "${({ title }) => title}";
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    padding: 16px;
    background-color: rgb(0 0 0 / .8);
    font-weight: bold;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    --cardWidth: 40vw;

    &:hover {
      border: 2px solid white;
    }

    &:hover::before,
    &:focus::before {
      content: "";
      background-color: transparent;
    }
  }
`;

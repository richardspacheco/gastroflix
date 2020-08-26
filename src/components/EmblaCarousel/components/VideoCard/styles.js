/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  border: 0;
  border-right: .5vw solid var(--gray);
  box-sizing: content-box;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  background-image: ${({ thumbnail }) => `url(${thumbnail})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;

  --cardWidth: 18vw;
  flex: 0 0 var(--cardWidth);
  width: var(--cardWidth);
  height: calc(var(--cardWidth) * 9 / 16);

  & > span {
    height: 100%;
    padding: 16px;
    background-color: rgb(0 0 0 / .8);
    font-size: 14px;
    font-weight: bold;
    opacity: 0;
    transition: opacity .3s;
  }

  &:hover > span,
  &:focus > span {
    opacity: 1;
  }

  @media (max-width: 800px) {
    --cardWidth: 40vw;
    border-right: 1vw solid var(--gray);

    & > span {
      display: none;
    }
  }
`;

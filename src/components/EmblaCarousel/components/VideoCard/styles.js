/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  border: 0;
  border-right: 4px solid var(--gray);
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
    width: 100%;
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

    & > span {
      display: none;
    }
  }
`;

import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  --cardWidth: 20vw;
  flex: 0 0 var(--cardWidth);
  width: var(--cardWidth);
  height: calc(var(--cardWidth) * 9 / 16);
  background-image: ${({ url }) => `url(${url})`};
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
    color: white;
    font-weight: bold;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

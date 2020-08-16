import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-weight: 400;
  font-size: 40px;
  margin-top: 0;
  margin-right: 16px;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    margin-right: 0;
    font-size: 32px;
    text-align: center;
  }
`;

export const BannerContainer = styled.section`
  height: 60vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    height: auto;
    min-height: 30vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const WatchLink = styled.a`
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0 24px;
  height: 50px;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  border: 0;
  background: var(--primary);
  transition: opacity .3s;
  display: none;
  margin: 0 auto;
  width: 80%;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    display: flex;
  }
`;
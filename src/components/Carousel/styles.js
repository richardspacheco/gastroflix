import styled from 'styled-components';

export const Title = styled.h3`
  display: inline-block;
  font-size: 2rem;
  margin: 0 0 8px;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  margin-left: 5%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

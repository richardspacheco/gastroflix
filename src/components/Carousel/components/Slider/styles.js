/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 100%;
    transform: initial;
    
    &:before {
      font-size: 24px;
    }
  }
  
  .slick-prev {
    width: 5vw;
    left: -5vw;

    @media (max-width: 800px) {
      display: none !important;
    }
  }

  .slick-next {
    width: calc(5vw - 15px);
    right: 0;
    transition: background-color .3s;

    @media (max-width: 800px) {
      width: 10vw;
    }
  }

  .slick-next:hover {
    background-color: rgb(0 0 0 / .8);
  }

  @media (max-width: 800px) {
    .slick-prev,
    .slick-next {
      &:before {
        font-size: 16px;
      }
    }
  }
`;

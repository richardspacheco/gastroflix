/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

import { Container } from './styles';

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      variableWidth: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slider;

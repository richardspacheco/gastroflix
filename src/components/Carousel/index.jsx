import React from 'react';
import PropTypes from 'prop-types';

import { VideoCardGroupContainer, Title } from './styles';
import Slider, { SliderItem } from './components/Slider';
import VideoCard from './components/VideoCard';

function Carousel({ title, videos, ignoreFirstVideo }) {
  return (
    <VideoCardGroupContainer>
      <Title>
        {title}
      </Title>
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.url}>
              <VideoCard
                url={video.url}
                title={video.title}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  ignoreFirstVideo: false,
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  title: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default Carousel;

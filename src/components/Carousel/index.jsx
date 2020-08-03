import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { VideoCardGroupContainer, Title } from './styles';
import Slider, { SliderItem } from './components/Slider';
import VideoCard from './components/VideoCard';

import youtubeRepository from '../../repositories/youtube';

function Carousel({ channel, ignoreFirstVideo }) {
  const channelTitle = channel.title;
  const [videoList, setVideoList] = useState();

  useEffect(() => {
    youtubeRepository.fetchList(channel.url)
      .then((res) => setVideoList(res));
  }, [channel.url]);

  return (
    <VideoCardGroupContainer>
      {videoList && (
        <>
          <Title>
            {channelTitle}
          </Title>
          <Slider>
            {videoList.map((video, index) => {
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
        </>
      )}
    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  ignoreFirstVideo: false,
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  channel: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Carousel;

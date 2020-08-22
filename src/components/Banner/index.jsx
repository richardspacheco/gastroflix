import React from 'react';
import PropTypes from 'prop-types';
import VideoIframe from './components/VideoIframe';
import { BannerContainer } from './styles';

function Banner({ videoId }) {
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <BannerContainer backgroundImage={thumbnail}>
      <VideoIframe
        videoId={videoId}
      />
    </BannerContainer>
  );
}

Banner.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default Banner;

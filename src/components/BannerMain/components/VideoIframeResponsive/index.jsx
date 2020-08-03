import React from 'react';
import PropTypes from 'prop-types';

import { VideoContainer, ResponsiveIframe } from './styles';

function YouTubeIframeResponsive({ videoId }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title={videoId}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

YouTubeIframeResponsive.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default YouTubeIframeResponsive;

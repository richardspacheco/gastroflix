import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardContainer } from './styles';

function VideoCard({ url, title }) {
  return (
    <VideoCardContainer
      href={`https://www.youtube.com/watch?v=${url}`}
      target="_blank"
      title={title}
      thumbnail={`https://i.ytimg.com/vi/${url}/hqdefault.jpg`}
    />
  );
}

VideoCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoCard;

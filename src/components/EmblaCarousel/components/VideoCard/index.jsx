import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardContainer } from './styles';

function VideoCard({ url, title, onCardClick }) {
  return (
    <VideoCardContainer
      src={`https://i.ytimg.com/vi/${url}/hqdefault.jpg`}
      alt={title}
      title={title}
      onClick={() => onCardClick(url)}
    />
  );
}

VideoCard.defaultProps = {
  onCardClick: () => {},
};

VideoCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onCardClick: PropTypes.func,
};

export default VideoCard;

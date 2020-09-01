import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { VideoCardContainer } from './styles';

function VideoCard({ url, title, onCardClick }) {
  const mql = window.matchMedia('(max-width: 800px)');
  const [isMobile, setIsMobile] = useState(mql.matches);

  function checkWindowWidth() {
    if (isMobile !== mql.matches) {
      setIsMobile(mql.matches);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth);
    return () => window.removeEventListener('resize', checkWindowWidth);
  });

  return (
    <VideoCardContainer
      as={isMobile && 'a'}
      href={isMobile ? `https://www.youtube.com/watch?v=${url}` : undefined}
      thumbnail={`https://i.ytimg.com/vi/${url}/hqdefault.jpg`}
      onClick={() => onCardClick(url)}
    >
      <span>{title}</span>
    </VideoCardContainer>
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

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useEmblaCarousel } from 'embla-carousel/react';

import VideoCard from './components/VideoCard';
import { Container, Title } from './styles';

function EmblaCarousel({ title, videos, onCardClick }) {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({ loop: true });

  function checkListLength(list) {
    if (list.length >= 8) {
      return list;
    }
    const newList = [...list, ...list];
    return checkListLength(newList);
  }

  useEffect(() => {
    if (embla) {
      // Embla API is ready
    }
  }, [embla]);

  return (
    <Container>
      <Title>
        {title}
      </Title>
      <EmblaCarouselReact>
        <div style={{ display: 'flex' }}>
          {checkListLength(videos).map((video, index) => (
            <VideoCard
              // eslint-disable-next-line react/no-array-index-key
              key={`${video.url}_${index}`}
              url={video.url}
              title={video.title}
              onCardClick={onCardClick}
            />
          ))}
        </div>
      </EmblaCarouselReact>
    </Container>
  );
}

EmblaCarousel.defaultProps = {
  onCardClick: () => {},
};

EmblaCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  onCardClick: PropTypes.func,
};

export default EmblaCarousel;

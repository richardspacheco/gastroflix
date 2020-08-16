import React from 'react';
import PropTypes from 'prop-types';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerContainer, ContentAreaContainer, WatchLink } from './styles';

function Banner({
  videoTitle,
  videoId,
}) {
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <BannerContainer backgroundImage={thumbnail}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            videoId={videoId}
          />
          <WatchLink
            href={`https://www.youtube.com/watch?v=${videoId}`}
          >
            Watch
          </WatchLink>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerContainer>
  );
}

Banner.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
};

export default Banner;

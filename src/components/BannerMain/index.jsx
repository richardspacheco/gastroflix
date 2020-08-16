import React from 'react';
import PropTypes from 'prop-types';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchLink } from './styles';

function BannerMain({
  videoTitle,
  videoId,
}) {
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={thumbnail}>
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
    </BannerMainContainer>
  );
}

BannerMain.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
};

export default BannerMain;

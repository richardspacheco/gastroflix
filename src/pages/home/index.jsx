import React, { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import EmblaCarousel from '../../components/EmblaCarousel';
import Loading from '../../components/Loading';
import Message from '../../components/Message';

import myListRepository from '../../repositories/myList';
import channelRepository from '../../repositories/channel';
import youtubeRepository from '../../repositories/youtube';

function Home() {
  const [myList, setMyList] = useState();
  const [channelList, setChannelList] = useState();
  const [bannerVideo, setBannerVideo] = useState();
  const [serverError, setServerError] = useState();

  function updateBanner(videoId) {
    setBannerVideo(videoId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  async function getChannelArrayWithVideos() {
    try {
      const channelArray = await channelRepository.getAll();

      const videoArray = await Promise.all(
        channelArray.map((channel) => youtubeRepository.fetchList(channel.url)),
      );

      const channelArrayWithVideos = channelArray.map((channel, index) => {
        const channelWithVideos = channel;
        channelWithVideos.videos = videoArray[index];
        return channelWithVideos;
      });

      setChannelList(channelArrayWithVideos);
    } catch (err) {
      setServerError(err);
    }
  }

  useEffect(() => {
    myListRepository.getAll()
      .then((res) => setMyList(res))
      .catch((err) => setServerError(err));

    getChannelArrayWithVideos();
  }, []);

  return (
    <Layout noPadding>
      {serverError && (
        <Message error style={{ margin: '32px 5%', width: '90%' }}>
          {serverError}
        </Message>
      )}

      {(!serverError && !myList) && <Loading />}

      {myList && (
        <>
          <Banner videoId={bannerVideo || myList[0].url} />
          <EmblaCarousel
            key="myList"
            title="My List"
            videos={myList}
            onCardClick={updateBanner}
          />
        </>
      )}

      {(!serverError && !channelList) && <Loading />}

      {channelList && channelList.map((channel) => (
        channel.videos && (
          <EmblaCarousel
            key={channel.url}
            title={channel.title}
            videos={channel.videos}
            onCardClick={updateBanner}
          />
        )
      ))}
    </Layout>
  );
}

export default Home;

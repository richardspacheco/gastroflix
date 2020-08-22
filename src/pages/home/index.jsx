import React, { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import EmblaCarousel from '../../components/EmblaCarousel';
import Loading from '../../components/Loading';

import myListRepository from '../../repositories/myList';
import channelRepository from '../../repositories/channel';
import youtubeRepository from '../../repositories/youtube';

function Home() {
  const [myList, setMyList] = useState();
  const [channelList, setChannelList] = useState();
  const [bannerVideo, setBannerVideo] = useState();

  function updateBanner(videoId) {
    setBannerVideo(videoId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  async function getChannelArrayWithVideos() {
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
  }

  useEffect(() => {
    myListRepository.getAll()
      .then((res) => setMyList(res))
      .catch((e) => console.log(e));

    getChannelArrayWithVideos();
  }, []);

  return (
    <Layout noPadding>
      {!myList && <Loading />}
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

      {!channelList && <Loading />}
      {channelList && channelList.map((channel) => (
        <EmblaCarousel
          key={channel.url}
          title={channel.title}
          videos={channel.videos}
          onCardClick={updateBanner}
        />
      ))}
    </Layout>
  );
}

export default Home;

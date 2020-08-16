import React, { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Carousel from '../../components/Carousel';

import myListRepository from '../../repositories/myList';
import channelRepository from '../../repositories/channel';
import youtubeRepository from '../../repositories/youtube';

function Home() {
  const [myList, setMyList] = useState();
  const [channelList, setChannelList] = useState();

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
      {(!myList && !channelList) && (<div>Loading...</div>)}

      {myList && (
        <>
          <Banner
            videoTitle={myList[0].title}
            videoId={myList[0].url}
          />

          <Carousel
            key="myList"
            title="My List"
            videos={myList}
            ignoreFirstVideo
          />
        </>
      )}

      {channelList && channelList.map((channel) => (
        <Carousel
          key={channel.url}
          title={channel.title}
          videos={channel.videos}
        />
      ))}
    </Layout>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import myListRepository from '../../repositories/myList';
import channelRepository from '../../repositories/channel';

function Home() {
  const [myList, setMyList] = useState();
  const [channelList, setChannelList] = useState();

  useEffect(() => {
    myListRepository.getAll()
      .then((res) => setMyList(res))
      .catch((e) => console.log(e));

    channelRepository.getAll()
      .then((res) => setChannelList(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Layout noPadding>
      {!myList && (<div>Loading...</div>)}

      {myList && (
        <>
          {/* <BannerMain
            url=""
            videoTitle=""
          />

          <Carousel
            channel={myList}
            ignoreFirstVideo
          /> */}
        </>
      )}

      {channelList && channelList.map((channel) => (
        <Carousel
          key={channel.id}
          channel={channel}
        />
      ))}
    </Layout>
  );
}

export default Home;

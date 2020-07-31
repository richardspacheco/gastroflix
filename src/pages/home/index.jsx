import React, { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import categoryRepositories from '../../repositories/category';

function Home() {
  const [dadosIniciais, setcategoryList] = useState();

  useEffect(() => {
    categoryRepositories.getAllWithVideoList()
      .then((res) => setcategoryList(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Layout noPadding>
      {!dadosIniciais && (<div>Loading...</div>)}

      {dadosIniciais && (
        <>
          <BannerMain
            url={dadosIniciais[0].videos[0].url}
            videoTitle={dadosIniciais[0].videos[0].titulo}
          />

          {dadosIniciais.map((categoryItem, index) => (
            <Carousel
              key={categoryItem.id}
              category={categoryItem}
              ignoreFirstVideo={index === 0}
            />
          ))}
        </>
      )}
    </Layout>
  );
}

export default Home;

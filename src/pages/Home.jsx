import React from 'react';
import BannerPrincipal from '../components/BannerPrincipal/BannerPrincipal';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Map from '../components/Map/Map';

const Home = () => {
  return(
    <>
      <BannerPrincipal />
      <FeaturedProducts />
      <Map />
    </>
  )
}

export default Home
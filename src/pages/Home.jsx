import React from 'react';
import BannerPrincipal from '../components/BannerPrincipal/BannerPrincipal';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Map from '../components/Map/Map';
import InfoSection from '../components/InfoSection/InfoSection';

const Home = () => {
  return(
    <>
      <BannerPrincipal />
      <FeaturedProducts />
      <InfoSection />
      <Map />
    </>
  )
}

export default Home
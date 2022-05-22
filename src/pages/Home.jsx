import React from 'react';
import BannerPrincipal from '../components/BannerPrincipal/BannerPrincipal';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Map from '../components/Map/Map';
import InfoSection from '../components/InfoSection/InfoSection';

const Home = () => {
  const links = document.querySelectorAll("nav ul li a")
  links.forEach((link) => link.classList.remove("active"))
  
  const homeLink = document.querySelector("nav ul li a.home")
  homeLink.classList.add("active")
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
import React from 'react';
import BannerPrincipal from '../components/BannerPrincipal/BannerPrincipal';

const Products = () => {
  const links = document.querySelectorAll("nav ul li a")
  links.forEach((link) => link.classList.remove("active"))
  
  const homeLink = document.querySelector("nav ul li a.produtos")
  homeLink.classList.add("active")
  return(
    <BannerPrincipal />
  )
}
export default Products
import React from 'react';
import ProductsSlider from '../components/ProductsSlider/ProductsSlider';

const Products = () => {
  const links = document.querySelectorAll("nav ul li a")
  links.forEach((link) => link.classList.remove("active"))
  
  const productLink = document.querySelector("nav ul li a.produtos")
  if(productLink) productLink.classList.add("active")

  return(
    <ProductsSlider />
  )
}
export default Products
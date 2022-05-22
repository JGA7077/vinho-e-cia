import React from 'react';
import styled from 'styled-components';
import { whiteBackground, primaryColor } from '../UI/variaveis';
import { SectionTitle } from '../UI';

import { Products } from '../../api/products';

const ProductSection = styled.div`
  background-color: ${whiteBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 0;
`

const ProductSectionTitle = styled(SectionTitle)`
  color: ${primaryColor};
`

const ProductsListContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${whiteBackground};

  .product-item {
    width: 230px;
    height: 340px;
    position: relative;
    margin: 10px 0;
    text-align: center;
    display: flex;
    justify-content: center;

    .shadow {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #00000045;
    }

    @media (min-width: 480px) {
      margin: 10px;
    }

    .product-image {
      width: 100%;
      height: 100%;
    }

    .product-name {
      font-weight: 400;
      color: #fff;
      position: absolute;
      bottom: 10px;
    }
  }
`

const FeaturedProducts = () => {
  console.log('Products', Products)
  return(
    <ProductSection>
      <ProductSectionTitle>Produtos em Destaque</ProductSectionTitle>
      <ProductsListContainer>
        {Products.map((product) => {
          return(
            <div className="product-item" key={product.name}>
              <div className="shadow"></div>
              <img src={product.imageURL} alt="" className="product-image" />
              <h3 className="product-name">
                {product.name}
              </h3>
            </div>
          )
        })}
      </ProductsListContainer>
    </ProductSection>
  )
}
export default FeaturedProducts
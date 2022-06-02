import React from "react";
import { Products } from "../../api/products";
import styled from "styled-components";
import { whiteBackground, textColor } from "../UI/variaveis";
import { Button } from "../UI";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsListContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${whiteBackground};

  .slick-slider {
    overflow: hidden;
    .slick-arrow {
      &.slick-prev,
      .slick-arrow.slick-next {
        z-index: 1;
      }
      &.slick-prev {
        left: 0;
      }

      &.slick-next {
        right: 0;
      }
    }

    @media (min-width: 768px) {
      .slick-list {
        margin: 0 -5px;
      }
      .slick-slide > div {
        padding: 0 5px;
      }
    }

    .slick-slide {
      overflow: hidden;
    }
  }

  .product-item {
    position: relative;
    margin: 10px 0;
    text-align: center;

    .shadow {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #00000045;
    }

    .product-image {
      width: 100%;
      height: 100%;
    }

    .textBox {
      height: 130px;
      position: relative;
      bottom: 30px;
      left: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;

      .product-name {
        font-family: 'Ribeye', cursive;
        font-weight: 400;
        color: ${textColor};
        margin-bottom: 10px;
      }
    }

  }
`;

const ProductsSlider = () => {
  console.log("Products Slider", Products);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ProductsListContainer>
      <Slider {...settings}>
        {Products.map((product, index) => (
          <div className="product-item" key={product.name}>
            <div className="shadow"></div>
            <img src={product.imageURL} alt="" className="product-image" />
            <div className="textBox">
              <h3 className="product-name">{product.name}</h3>
              <Button className="checkProduct">Confira o Produto</Button>
            </div>
          </div>
        ))}
      </Slider>
    </ProductsListContainer>
  );
};
export default ProductsSlider;

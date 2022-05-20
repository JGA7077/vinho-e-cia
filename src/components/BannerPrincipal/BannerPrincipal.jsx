import React from "react";
import styled from "styled-components";
import BannerImage from "../../assets/images/Destaques Maiores/banner-principal-home.jpg";
import TitleImage from "../../assets/images/Divisores/destaque-home.png";
import { secondaryColor } from "../UI/variaveis";

const Banner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    background-position-x: -290px;
  }

  .title {
    font-family: "Ribeye", cursive;
    color: ${secondaryColor};
    font-size: 42px;

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 50px;
    }

    @media (min-width: 1024px) and (max-width: 1279px) {
      font-size: 60px;
    }

    @media (min-width: 1280px) {
      font-size: 65px;
    }
  }
`;

const SpotlightImage = styled.img`
  width: 296px;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 352px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 423px;
  }

  @media (min-width: 1280px) {
    width: 458px;
  }
`;

export default () => {
  return (
    <Banner>
      <h1 className="title">Vinhos & Cia</h1>
      <SpotlightImage src={TitleImage} />
    </Banner>
  );
};

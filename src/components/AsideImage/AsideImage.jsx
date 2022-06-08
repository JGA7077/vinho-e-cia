import React from "react";
import styled from "styled-components";
import Img from "../../assets/images/aside-events.jpg";

const ImageWrapper = styled.div`
  float:left;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 262px;
  height: auto;

  @media (min-width: 800px) {
    width: 462px;
    height: 350px;
  }
`;

const AsideImage = () => {
  return (
    <ImageWrapper>
      <Image src={Img} />
    </ImageWrapper>
  );
};

export default AsideImage;

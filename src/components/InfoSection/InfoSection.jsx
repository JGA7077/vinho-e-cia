import React from "react";
import styled from "styled-components";
import { SectionContainer, SectionBox, SectionTitle } from "../UI";
import { primaryColor, secondaryColor } from "../UI/variaveis";
import BackgroundImage from "../../assets/images/prateleira-vinhos.jpg";

const Container = styled(SectionContainer)`
  background-color: #fff;
  padding: 10px 0;

  @media (min-width: 1024px) {
    padding: 10px 50px;
  }
`;

const ImageBox = styled(SectionBox)`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 90vw;

  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const TextBox = styled(SectionBox)`
  background-color: #fff;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px 0;
  padding: 20px 20px;
  height: auto;
  width: 90vw;

  @media (min-width: 768px) {
    width: 50vw;
  }

  .number {
    font-family: 'Ribeye', cursive;
    font-size: 1.5rem;
    color: ${secondaryColor};
  }
`;

const BoxTitle = styled(SectionTitle)`
  font-family: "Great Vibes", cursive;
  color: ${primaryColor};
  font-size: 2rem;
`;

const InfoSection = () => {
  return (
    <Container>
      <ImageBox />
      <TextBox>
        <BoxTitle>Seja Bem-Vindo!</BoxTitle>
        <div className="scheduleContainer">
          <p className="text">De Terça à Domingo, das 08hs às 21hs</p>
          <p className="text">Reserve já seu Horário</p>
        </div>
        <p className="number">(19) 9999-9999</p>
        <p className="text">Temos uma grande variedade de vinhos e espaço para eventos, venha já conferir!</p>
      </TextBox>
    </Container>
  );
};
export default InfoSection;

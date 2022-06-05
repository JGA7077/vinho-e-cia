import React from "react";
import styled from "styled-components";
import { SectionContainer, SectionTitle, SubTitle, TextOverlay, Text } from "../UI";
import { FaWineGlassAlt } from "react-icons/fa";
import { primaryColor, secondaryColor } from "../UI/variaveis";
import scheduleBackground from "../../assets/images/Destaques Maiores/schedule-background.jpg";

const ScheduleWrapper = styled(SectionContainer)`
  background-color: #f8e5bb;
  display: flex;
  flex-direction: column;
  height: auto;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${scheduleBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 480px;
  text-align: center;
  position: relative;

  @media (min-width: 1280px) {
    height: 520px;
  }
`;

const WineIcon = styled(FaWineGlassAlt)`
  font-size: 1.5em;
  cursor: pointer;
  color: ${primaryColor};
  width: 30px;
  height: 40px;
  align-self: center;
`;

const ScheduleTitle = styled(SectionTitle)`
  font-family: "Ribeye", cursive;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 32px;
  }
`;

const ScheduleSubTitle = styled(SubTitle)`
  font-family: "Ribeye", cursive;
  margin: 10px 0;
`;

const ScheduleNumber = styled(SubTitle)`
  font-family: "Ribeye", cursive;
  color: ${secondaryColor};
`;

const TextContainer = styled(SectionContainer)`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1280px) {
    height: 520px;
    padding: 0 50px;
  }
`;

const TextTitle = styled(SubTitle)`
  font-family: "Ribeye", cursive;
  margin-bottom: 10px;

  @media (min-width: 1280px) {
    margin-bottom: 30px;
  }
`;

const Paragraph = styled(Text)``;

const SchedulingSection = () => {
  return (
    <ScheduleWrapper>
      <ImageContainer>
        <TextOverlay />
        <WineIcon />
        <ScheduleTitle>Agendamento</ScheduleTitle>
        <ScheduleSubTitle>Ligue e faça a sua reserva</ScheduleSubTitle>
        <ScheduleNumber>(19) 9999-9999</ScheduleNumber>
      </ImageContainer>
      <TextContainer>
        <TextTitle>Faça já o Agendamento</TextTitle>
        <Paragraph>Venha aproveitar nosso espaço e festeje junto com seus amigos e familiares!</Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ratione dolorem ipsum dolore, expedita rem aliquid maiores inventore
          provident, illum error possimus saepe facere dolorum quibusdam? Eius, id officiis!
        </Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus ratione dolorem ipsum dolore</Paragraph>
      </TextContainer>
    </ScheduleWrapper>
  );
};

export default SchedulingSection;

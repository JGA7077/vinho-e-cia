import styled from "styled-components";
import { primaryColor, secondaryColor } from "./variaveis";

export const Button = styled.button`
  width: 145px;
  height: 40px;
  background-color: ${secondaryColor};
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: ${primaryColor};
  }
`

export const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const SectionBox = styled.div`
  width: 50%;
  height: 50%;
`

export const SectionTitle = styled.h2`
  color: ${primaryColor};
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
`

export const SubTitle = styled.h3`
  color: ${primaryColor};
  font-size: 25px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    font-size: 48px;
  }

  @media (min-width: 1280px) {
    font-size: 52px;
  }
`

export const Icon = styled.svg`
  width: 30px;
  height: 40px;
`

export const TextOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #00000045;
`

export const Text = styled.p`
  text-align: center;
  margin: 5px auto;
  width: 290px;

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 475px;
  }

  @media (min-width: 1280px) {
    width: auto;
  }
`
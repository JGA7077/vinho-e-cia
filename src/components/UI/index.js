import styled from "styled-components";
import { primaryColor, secondaryColor } from "./variaveis";

export const Button = styled.button`
  width: 145px;
  height: 40px;
  background-color: ${secondaryColor};
  color: #fff;
  border: none;
  border-radius: 50px;

  &:hover {
    background-color: ${primaryColor};
  }
`
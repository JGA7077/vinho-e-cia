import React from 'react';
import img from '../../assets/images/icones/fruit.svg'
import styled from 'styled-components';
import { primaryColor } from '../UI/variaveis';

const ImageLogo = styled.img`
  width: 57px;
`

const TextLogo = styled.span`
  font-family: 'Satisfy', cursive;
  margin-left: -10px;
  margin-top: -10px;
  color: ${primaryColor};
`

const Logo = () => {
  return(
    <div>
      <ImageLogo src={img} alt="Logo da empresa" />
      <TextLogo>inhos & cia</TextLogo>
    </div>
  )
}

export default Logo
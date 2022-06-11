import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100vw;
  text-align: center;
  background-color: #3a3a3a;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-text {
    color: #fff;
    font-weight: 400;
  }
`

// eslint-disable-next-line
export default () => {
  return(
    <Footer>
      <p className="footer-text">Copyright &copy; 2020 Vinhos e Cia | Criado por Ewelyn e Gabriel</p>
    </Footer>
  )
}
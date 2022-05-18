import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 5px;
  position: relative;
`

 
export default () => {
  return(
    <Header>
      <Logo />
      <Menu />
    </Header>
  )
}
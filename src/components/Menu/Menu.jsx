import React, { useState } from "react";
import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import { Button } from "../UI";
import MenuList from "../MenuList/MenuList";

const Icon = styled(TiThMenu)`
  font-size: 1.5em;
  cursor: pointer;
  color: green;
  position: absolute;
  right: 5px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Nav = styled.nav`
  .open {
    display: flex;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Menu = () => {
  const [isActive, setisActive] = useState(false);

  const menuToggle = () => {
    console.log("clicou", isActive);
    setisActive(!isActive);
  };

  return (
    <>
      <Icon onClick={menuToggle} />
      <Nav className={`${isActive && "open"}`}>
        <MenuList isOpen={isActive} />
      </Nav>
    </>
  );
};

export default Menu;

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
  /* max-width: 1170px;
  padding: 1.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center; */

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

  // var deviceWidth = window.innerWidth;
  // if(deviceWidth >= 1024) setisActive(isActive);

  return (
    <>
      <Icon onClick={menuToggle} />
      {/* <nav style={{ display: isActive ? "flex" : "none" }}> */}
      <Nav className={`${isActive && "open"}`}>
        {/* <ImMenu onClick={menuToggle}> */}
        {/* <MenuList style={{ display: isActive ? "flex" : "none" }}> */}
        {/* <MenuList style={{ display: isActive ? "flex" : "none" }}>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
          <Link to="/contato"><button>Contato</button></Link> */}
        {/* <li><a>Home</a></li>
          <li><a>Produtos</a></li>
          <li><a>Eventos</a></li>
          <a><Button>Contato</Button></a>
        </MenuList>} */}
        {/* </ImMenu> */}
        <MenuList isOpen={isActive} />
      </Nav>
    </>
  );
};

export default Menu;

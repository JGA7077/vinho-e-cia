import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../UI";
import { primaryColor } from "../UI/variaveis";

const MenuList = styled.ul`
  display: none;
  position: fixed;
  width: 100%;
  height: 57vh;
  background-color: #fff;
  top: 75px;
  /* left: -100%; */
  left: 0%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 1024px) {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 500px;
  }

  li a {
    color: #000;

    &.active, &:hover {
      color: ${primaryColor};
    }
  }

  .open {
  }
`;

export default ({ isOpen }) => {
  const url = window.location.pathname
  return (
    <MenuList className={`${isOpen && "open"}`}>
      <li><Link className="home" to="/">Home</Link></li>
      <li><Link className="produtos" to="/produtos">Produtos</Link></li>
      <li><Link className="eventos" to="/eventos">Eventos</Link></li>
      <Link to="/contato"><Button>Contato</Button></Link>
    </MenuList>
  );
};

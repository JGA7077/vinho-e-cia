import React from "react";
import styled from "styled-components";
import { Button } from "../UI";

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

  .open {
  }
`;

export default ({ isOpen }) => {
  return (
    // <MenuList className={ display: isActive ? "flex" : "none"}>
    <MenuList className={`${isOpen && "open"}`}>
      {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <Link to="/contato"><button>Contato</button></Link> */}
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Produtos</a>
      </li>
      <li>
        <a>Eventos</a>
      </li>
      <a>
        <Button>Contato</Button>
      </a>
    </MenuList>
  );
};

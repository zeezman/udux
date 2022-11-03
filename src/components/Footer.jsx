import React from 'react'
import styled from "styled-components";
import { discover, home, library, playlist} from "../assets/index";

const Menu = styled.div`   
    display: flex; 
    justify-content: center; 
`;
const MenuList = styled.div`   
    margin: 0 20px; 
    width: 100px;
    padding: 10px; 

    img {
      width: 35px;
    }
`;

const Footer = () => {
  return (
    <div className="FooterContainer">
      <Menu>
        <MenuList>  <img src={discover}  alt="discover" /> </MenuList>
        <MenuList>  <img src={home}  alt="home" /> </MenuList>
        <MenuList>  <img src={library}  alt="library" /> </MenuList>
        <MenuList>  <img src={playlist}  alt="playlist" /> </MenuList>
      </Menu>
    </div> 
  )
}

export default Footer
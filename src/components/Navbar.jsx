import React from 'react'
import { audio, avatar, discover, home, library, likeMusic, playlist, playlists, search, speaker} from "../assets/index";
import styled from "styled-components";
// import { Typography, Menu, Avatar, Button } from "antd";


const NavContainer = styled.div`  
   margin-top: 1.8em; 
   width: 100%;  
`;

const NavTop = styled.div`  
   padding: 10px 20px;
  background-color: #1a1515;
`;
const BoxIcon = styled.div`  
   display: flex;

   h3{
      font-size: 1em;
      padding-left: 1.5em;
      padding-top: 1.5em;
      color: white;
   }
`;

const Menu = styled.div`  
   margin-top: 2em;
   padding: 0 20px;  
`;
const MenuItem = styled.div` 
   margin: 10px 0;
    display: flex; 
`;
const Typography = styled.a`
   padding-left: 10px;
   padding-top: 5px;
    font-size: large;
    color: gray;
    cursor: pointer;
    
    &:hover{
 color: yellow;
}
`;

const Navbar = () => {

  return (
     <NavContainer>
        <NavTop>
            <BoxIcon>
               <img src={avatar}  alt="oma" />
               <h3>Hey! Aleem</h3>
            </BoxIcon>
        </NavTop>
        <Menu className='menus'>
         <MenuItem >
            <img src={discover} alt="icon name" />
            <Typography>Home</Typography>
         </MenuItem>
         <MenuItem>
            <img src={home} alt="icon name" />
            <Typography>Discover</Typography>
         </MenuItem> <br /> 

         <MenuItem>
            <img src={library} alt="icon name" />
            <Typography>Your Library</Typography>
         </MenuItem>
         <MenuItem>
            <img src={likeMusic} alt="icon name" />
            <Typography>Liked Songs</Typography>
            <img src={speaker} alt="icon name" />
         </MenuItem> 
         <MenuItem>
            <img src={audio} alt="icon name" />
            <Typography>Recently Played</Typography>
         </MenuItem>
         <MenuItem>
            <img src={playlists} alt="icon name" />
            <Typography>Create Playlist</Typography>
         </MenuItem> <br />
         <MenuItem>
            <img src={playlist} alt="icon name" />
            <Typography>My Playlist</Typography>
            <img src={search} alt="icon name" />
         </MenuItem> <br /> 

         {/* Text link  */}
         <MenuItem> 
            <Typography>Riffs & Run</Typography>
         </MenuItem>
         <MenuItem> 
            <Typography>Africa Heats</Typography>
         </MenuItem> 
          <MenuItem> 
            <Typography>Gidi Night</Typography>
         </MenuItem>
         <MenuItem> 
            <Typography>Running out of playlists ..</Typography>
         </MenuItem>
         <MenuItem> 
            <Typography>Saturday was a good day</Typography>
         </MenuItem> 
         <MenuItem> 
            <Typography>Gidi Night</Typography>
         </MenuItem>
         <MenuItem> 
            <Typography>Riffs & Run</Typography>
         </MenuItem>
         <MenuItem> 
            <Typography>Africa Heats</Typography>
         </MenuItem> 
         <MenuItem> 
            <Typography>Running out of playlists ..</Typography>
         </MenuItem>
         <MenuItem> 
            <Typography>Saturday was a good day</Typography>
         </MenuItem> 
         <MenuItem> 
            <Typography>Gidi Night</Typography>
         </MenuItem>
         <MenuItem> 
            <Typography>Riffs & Run</Typography>
         </MenuItem>
         <MenuItem> 
            <Typography>Africa Heats</Typography>
         </MenuItem> 
        </Menu>
     </NavContainer>
  )
}
 
export default Navbar;
import React from 'react'
import styled from "styled-components";
import {arrowLeft, arrowRight, banner, logo, omalay, search} from "../assets/index";
import Album from './Album';
import Playlist from './Playlist';


const Header = styled.div`  
  margin: 50px 0; 
  width: 100%;    
  `;

  const HeroContent = styled.div`  

    .lb {   
      position: absolute;
      top: 20%;;
      left: 25%;
    }
    .rt {   
      position: absolute;
      top: 25%; 
      right: 30px;
    }
  `;

  const Banner = styled.div`  
    margin-top : 2em;
    object-fit: cover; 

    .hero {  
      object-fit: cover;
      width: 620px;
      height: 200px;
    }
    @media screen and (min-width: 800px){ 
      .hero {  
      object-fit: cover;
      width: 1300px;
      height: 200px;
    }
    }
`;

const Hero = styled.div`  
 margin-top: 3em;
  `;

  const Row = styled.div`  
    display: flex;
    justify-content: space-between;
   `;

  const Col = styled.div`  
    padding: 10px;

    .lr{  
      background-color: #1d1c1c;
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    .search{   
      width: 25px;
      height: 25px;
      margin-left: 2.3em;
    }
  `;

const Title = styled.h3`   
    color: white;
    font-size: 1.5em;
 `;
const Subtitle = styled.p`   
  color: #cac7c7;
  font-size: 1em;
`;
const Rol = styled.div`   
  display: flex;
`;
 
  
const Homepage = () => {
  return (
    <Header> 
      <div className="Hero-top">
        <Rol>
          <Col> <img src={arrowLeft} className="lr" alt="arrow" />  </Col>
          <Col> <img src={arrowRight} className="lr" alt="left arrow " />  </Col>
          <Col> <img src={search} className="search" alt="search" />  </Col>
        </Rol>
      </div>
      <HeroContent>
         <Banner> 
          <img src={banner} className="hero" alt="banner" /> 
        </Banner>
          <img src={logo} className="lb" alt="banner" /> 
          <img src={omalay} className="rt" alt="banner" /> 
      </HeroContent>
     

      <Hero>
        <Row>
          <Col> <Title> Welcome Back!</Title></Col>
          <Col> <Subtitle>See more</Subtitle></Col>
        </Row>
            {/* Album components  */}
              <Album/>
        <Row>
          <Col> <Title> Cheers To The Weekend</Title></Col>
          <Col> <Subtitle>See more</Subtitle></Col>
        </Row>
            {/* Playlist components  */}
                <Playlist/>
      </Hero>
    </Header>
  )
}

export default Homepage
// <Card
// title={`${currency.rank}. ${currency.name}`}
// extra={<img className="crypto-image" src={currency.iconUrl} alt='crypto'/>}
// hoverable
// >
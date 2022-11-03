import React from 'react'
import styled from "styled-components";
import {burna, oma, rapper} from "../assets/index"; 


const AlbumContainer = styled.div`   
  color: #cac7c7;
  font-size: 1em;
`;
const Row= styled.div`   
  display: flex;
  width: 100%;
  overflow:hidden;
`;

const Col= styled.div`   
 padding: 10px;
 transition: all 2s;

&:hover{
 scale: 1.1;
}
`;
const Card= styled.div`   
    width: 200px;
    height: 250px;
    border: 2px solid grey;

  .sm-box { 
    margin-top: 20px;  
    background: linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%); 
    }

    .sm-box.min { 
      margin-top: 20px;  
      background: linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%); 
    }
    .sm-box.lg {  
      background: linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%); 
    }
     
    .md-box {  
      height: 150px; 
      width: 150px;  
      border: 8px solid black;
      margin: 0 auto;

      img {  
       width: 100%;
    }
      
    }
    .lg-box {  
      box-shadow: 1px 1px 6px black;
      text-align: left;
      padding: 10px 30px;
      height: 70px;
      line-height: 1;
      background: linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%);

      span{  
       font-size: 10px;
      }
    }
    .lg-box.max {   
      background: linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%);
    }
    .lg-box.xl {   
      background: linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%);
    }
`;

const Album = () => {
  return (
    <AlbumContainer>
      <Row>
        <Col>
          <Card>
            <div className="sm-box">
              <div className="md-box">  <img src={burna} alt="oma" /> </div>
              <div className="lg-box"><h3>Daily Vibes 1 <br /> 
              <span> Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwasavage.. </span></h3> 
              {/* <span> Lojay, Oxlade, Ama Rae, Omah lay, Rema, SGawd... </span></h3>  */}
              </div>
            </div>
          </Card>
        </Col>
         <Col>
          <Card>
            <div className="sm-box min">
              <div className="md-box">  <img src={oma} alt="oma" /> </div>
              <div className="lg-box max"><h3>Daily Vibes 2 <br />  
              <span> Lojay, Oxlade, Ama Rae, Omah lay, Rema, SGawd... </span></h3> 
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card>
            <div className="sm-box lg">
              <div className="md-box">  <img src={rapper} alt="oma" /> </div>
              <div className="lg-box xl"><h3>Daily Vibes 5 <br /> 
              <span> Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwasavage.. </span></h3> 
              {/* <span> Lojay, Oxlade, Ama Rae, Omah lay, Rema, SGawd... </span></h3>  */}
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card>
            <div className="sm-box">
              <div className="md-box">  <img src={burna} alt="oma" /> </div>
              <div className="lg-box"><h3>Daily Vibes 1 <br /> 
              <span> Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwasavage.. </span></h3> 
              {/* <span> Lojay, Oxlade, Ama Rae, Omah lay, Rema, SGawd... </span></h3>  */}
              </div>
            </div>
          </Card>
        </Col>
         <Col>
          <Card>
            <div className="sm-box min">
              <div className="md-box">  <img src={oma} alt="oma" /> </div>
              <div className="lg-box max"><h3>Daily Vibes 2 <br />  
              <span> Lojay, Oxlade, Ama Rae, Omah lay, Rema, SGawd... </span></h3> 
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card>
            <div className="sm-box lg">
              <div className="md-box">  <img src={rapper} alt="oma" /> </div>
              <div className="lg-box xl"><h3>Daily Vibes 5 <br /> 
              <span> Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwasavage.. </span></h3> 
              {/* <span> Lojay, Oxlade, Ama Rae, Omah lay, Rema, SGawd... </span></h3>  */}
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </AlbumContainer>
  )
}

export default Album
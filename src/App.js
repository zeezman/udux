import styled from "styled-components";
import React from 'react'
import './App.css'; 
// import { Layout, Typography, Menu, Avatar, Button } from "antd";

import {Footer, Homepage, Navbar} from './components';

// Styled component named StyledButton
const AppContainer = styled.div` 
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;
const Layout = styled.div` 
  width: 100%; 
`;

const App = () => { 
  return ( 
      <AppContainer>
        <div className="box-container">
          <div className="nav">
            <Navbar/>
          </div>
 
            <Layout>
              <Homepage/>  
            </Layout> 
        </div>
        <Footer/>
      </AppContainer> 
  )
}

export default App
import React from "react";
import {Container, Grid} from '@mui/material';
import Profile from "./Component/Profile/Profile";
import Header from "./Component/Header/Header";
import Resume from "./Pages/Resume/Resume";
import Footer from "./Component/Footer/Footer";
import Portfoio, { Portfolio } from "./Pages/Portfolio/Portfoio";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Container className="mt_30">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
          </Grid> 
        <Grid item lg={9}>
         <Router>
           <Header />
           <div className="main_content container_shadow">
           <Routes>
             <Route path="/portfolio" element={<Portfolio />}></Route>
             <Route path="/resume" element={<Resume />}></Route>
           </Routes>          
           </div>
           <Footer />         
         </Router>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default App;

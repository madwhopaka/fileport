import logo from './logo.svg';
import React,  {useEffect, useState} from "react";  
import './App.css';
import {Container,Grid, Card} from "@mui/material"; 
import { UploadContainer } from './UploadContainer';
import Context from '@mui/base/TabsUnstyled/TabsContext';
import main_logo from "./images/main_logo.png"; 
import upload from './images/marginalia-uploading.png' ; 
import pluto from './images/pluto-uploading-1.png' ;

function App() {
  return (
   
    < Container style= {{display:"flex", justifyContent:"center", flexDirection:"column",  }}>
    <img src={main_logo} alt="Inshare logo" class="logo" />
    <h3 class= "logo-title">CloudShare</h3>
    
    <div className= "upload-container" style = {{ borderRadius: "25px"}}>
     <UploadContainer />
     </div>
     <div>
       <h3 style = {{color:"white", textAlign:"center"}}> Created by <a className= "link" href="https://github.com/madwhopaka">@madwho</a> </h3>
    </div>
    </Container>
    
  
  
  );
}

export default App;

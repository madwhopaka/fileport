import React, {useEffect} from "react";
import { Container, Grid, Typography } from "@mui/material";
import "./App.css";

export const UploadContainer = () => {
var img1 = document.querySelector('.image');
var dropzone = document.querySelector(".drop-zone") ;
var uploadcont = document.querySelector(".upload-container"); 
const hiddenFileInput = React.useRef(null);

 useEffect(() => {
   img1 = document.querySelector('.image');
   dropzone = document.querySelector(".dropzone") ;
   uploadcont = document.querySelector(".upload-container");
   
 }, [hiddenFileInput.files]);


 
  const handleDragEnter = e => {
    e.preventDefault();
    
    e.stopPropagation();
  };
  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    
    
      if(img1.classList.contains("iimmg"))
    {
      img1.classList.remove("iimmg"); 
    }
      if(dropzone.classList.contains("droppzone")) {
        dropzone.classList.remove("droppzone")
      }
      if (uploadcont.classList.contains("uploadcont")){
        uploadcont.classList.remove("uploadcont"); 
      }
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
   
    
      if(!img1.classList.contains('iimmg')) {
        img1.classList.add('iimmg') ;
      }
      if (!dropzone.classList.contains("droppzone")) {
          dropzone.classList.add("droppzone") ; 
      }
      if (!uploadcont.classList.contains("uploadcont")) {
        uploadcont.classList.add("uploadcont") ; 
    }

   
   
  };




  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    
      if(img1.classList.contains("iimmg"))
    {
      img1.classList.remove("iimmg"); 
    }

    if(dropzone.classList.contains("droppzone")) {
      dropzone.classList.remove("droppzone")
    }
    if(uploadcont.classList.contains("uploadcont")) {
      uploadcont.classList.remove("uploadcont");
    }

    console.log(e.dataTransfer.files.length);
    var files = e.dataTransfer.files; 
    if (files) {
     console.log(files) ; 
    }
   
  };


  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  return (
    <Container
      sx={{
        height: "40vh",
        width: "40vw",
        margin: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="dropzone"
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
      onDragEnter={e => handleDragEnter(e)}
      onDragLeave={e => handleDragLeave(e)}
    >
      <img
        
        width="100px"
        height="90px"
        src="https://cdn-icons.flaticon.com/png/512/2956/premium/2956875.png?token=exp=1639486475~hmac=8da19f255989dc002b0be0e579d2535b"
        alt="filshare"
        className= "image"
      />
      <input ref= {hiddenFileInput} style = {{display:"none"}} type = "file"></input>
      <p className= "simpletext" style = {{color:"white"}}>Drop your files here or <span id = "browse-button" onClick={handleClick}>broswse</span></p>
    </Container>
  );
};



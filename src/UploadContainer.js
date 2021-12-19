import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import "./App.css";
import upload from "./images/upload.png";
import axios from "axios";
import { ProgressBar } from "./ProgressBar";

const host = "https://cloud-share-server.herokuapp.com";
const uploadUrl = `${host}/api/files`;

export const UploadContainer = () => {
  var uploadcont = document.querySelector('.upload-container'); 
  var dropzone = document.querySelector('.dropzone') ; 
  var img1 = document.querySelector('.image')
  const hiddenFileInput = React.useRef(null);
  const [progressPercent , setProgressPercent] = useState(0) ; 

  useEffect(() => {
    img1 = document.querySelector(".image");
    dropzone = document.querySelector(".dropzone");
    console.log(dropzone) ; 
    uploadcont = document.querySelector(".upload-container");
    console.log(hiddenFileInput.files);
  }, [hiddenFileInput.files]);

 
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!img1.classList.contains("iimmg")) {
      img1.classList.add("iimmg");
    }
    console.log(dropzone) ; 
    if (!dropzone.classList.contains("droppzone")) {
      dropzone.classList.add("droppzone");
    }
    if (!uploadcont.classList.contains("uploadcont")) {
      uploadcont.classList.add("uploadcont");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (img1.classList.contains("iimmg")) {
      img1.classList.remove("iimmg");
    }

    if (dropzone.classList.contains("droppzone")) {
      dropzone.classList.remove("droppzone");
    }

    if (uploadcont.classList.contains("uploadcont")) {
      uploadcont.classList.remove("uploadcont");
    }

    if (e.dataTransfer.files.length != undefined) {
      console.log(e.dataTransfer.files.length);
      var files = e.dataTransfer.files;
      if (files) {
        console.log(files);
      }
      uploadFile(files);
    }
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  function uploadFile(files) {
    const file = files[0];
    const formData = new FormData();
    formData.append("myfile", file);

    try {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE) console.log(xhr.response);
      };
      xhr.upload.onprogress = updateProgress;

      xhr.open("POST", uploadUrl);
      xhr.send(formData);
    } catch (err) {
      console.log(err);
    }
  }

  const updateProgress = (e) => {
    const percent =   Math.round((e.loaded/e.total)*100);
    console.log(percent) ; 
    setProgressPercent(percent) ; 
  };

  return (
    <div className = "lower-cont">
      <Container
        sx={{
          margin: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="dropzone"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
      
        
      >
        <img
          width="120px"
          height="110px"
          src={upload}
          alt="filshare"
          className="image"
        />
        <input
          ref={hiddenFileInput}
          style={{ display: "none" }}
         
          type="file"
        ></input>
        {progressPercent>0?<p className="simpletext" style={{ color: "white", textAlign:"center" }}>
         {progressPercent==100?"File Uploaded !":"Uploading the file..."}
        </p>: <p className="simpletext" style={{ color: "white", textAlign:"center" }}>
          Drop your files here or{" "}
          <span id="browse-button" onClick={handleClick}>
            broswse
          </span>
        </p>}
      </Container>
      <ProgressBar percent = {progressPercent}/>
    </div>
  );
};

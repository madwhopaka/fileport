import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import "./App.css";
import upload from "./images/upload.png";
import axios from "axios";
import { ProgressBar } from "./ProgressBar";
import { LinkContainer } from "./LinkContainer";
import {Sharebutton} from './ShareButton.js';
import {SnackBar} from './SnackBar.js'  ;
import Loading from "./Loading";


const host = "https://cloud-share-server.herokuapp.com";
const uploadUrl = `${host}/api/files`;

export const UploadContainer = ({showDocumentation}) => {
  var uploadcont = document.querySelector(".upload-container");
  var dropzone = document.querySelector(".dropzone");
  var img1 = document.querySelector(".image");
  var documentation = document.querySelector("#documentation"); 
  var hiddenFileInput = React.useRef(null);
  const [progressPercent, setProgressPercent] = useState(null);
  const [showProgressBar, ToggleProgressBar] = useState(false);
  const [fileLink, setFileLink] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [eror, setEror] = useState(null) ; 
  const [loading,setloading] = useState(false) ; 
  
  const maxAllowedSize = 1024*1024*100;

  useEffect(() => {
   if ( window.navigator.onLine==false && showProgressBar)  {
     console.log(eror) ; 
     console.log(window.navigator.onLine) ; 
      ToggleProgressBar(false); 
      setProgressPercent(0) ;
      setFileLink(null); 
      setEror("Internet Disconnected"); 


    } 
   documentation = document.querySelector("#documentation"); 
    console.log(documentation) ; 
    img1 = document.querySelector(".image");
    dropzone = document.querySelector(".dropzone");
    console.log(dropzone);
    uploadcont = document.querySelector(".upload-container");
    console.log(hiddenFileInput.files);
  }, [hiddenFileInput.files]);

  
  
  

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!img1.classList.contains("iimmg")) {
      img1.classList.add("iimmg");
    }
    console.log(dropzone);
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
      if (window.navigator.onLine) {
        const file = files[0];
        
        if (file.size<=maxAllowedSize)
       { console.log(file.size); 
          
         uploadFile(file);
       }
        else 
          {
            console.log(file.size) ;
            setEror("Max size limit : 100MB") ;
            console.log(eror) ; 
          }
      }
      else {
        
        setEror('No internet'); 
        console.log(eror) ; 
      }
    }
  };

  const  handleClick = async (event) => {
   await hiddenFileInput.current.click()
   
  

  };

  function uploadFile(file) {
    
    documentation.style.display = "none" ; 
    showDocumentation(false); 
    setFileName(file.name);
    const formData = new FormData();
    formData.append("myfile", file);
    ToggleProgressBar(true);
    try {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          console.log(xhr.response);
          const link = JSON.parse(xhr.response);
          console.log(link);
          setFileLink(link.file);
          setTimeout(() => {
            ToggleProgressBar(false);
          }, 3000);
        }
        if (xhr.readyState == XMLHttpRequest.LOADING &&  !window.navigator.onLine) {
          ToggleProgressBar(false) ; 
          setProgressPercent(0) ; 
          setFileLink(null) ; 
          setEror(`Upload Error: ${xhr.statusText}`); 
        }
       
      };
      xhr.upload.onprogress = updateProgress;
      xhr.upload.onerror = ()=>{
        ToggleProgressBar(false) ; 
        setProgressPercent(0) ; 
        setFileLink(null) ; 
        setEror(`Upload Error: ${xhr.statusText}`); 
      }
      setloading(true) ; 
      xhr.open("POST", uploadUrl);
      xhr.send(formData);
     
    } catch (err) {
      setEror(`Upload Error: ConnectionError `) ;  
      console.log(err);
    }
  }

  const updateProgress = (e) => {
    const percent = Math.round((e.loaded / e.total) * 100);
    if (percent>0) {
      setloading(false) ; 
    }
    setProgressPercent(percent);
   
  };

  const handleChange = (e)=> {
    e.preventDefault(); 
    e.stopPropagation(); 
     console.log(e.target.files)  ; 
     if (e.target.files) {
       var file= e.target.files[0] ;
       if (file.size<=maxAllowedSize)
       { console.log(file.size); 
          
         uploadFile(file);
       }  
       else {
         setEror("File size exceded") ; 
       }
     }
   
  }

  return (
    <div className="lower-cont">
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
          onChange = {(e)=>{handleChange(e); }}
          style={{ display: "none" }}
          type="file"
        ></input>
        {progressPercent > 0 ? (
          <div>
            {" "}
            {progressPercent == 100 ? (
             <>
              <p
                className="simpletext"
                style={{ color: "white", textAlign: "center"   }}
              >
                File Uploaded... {"    "}
                <span className="file-name">{fileName}</span>
              </p>
              <p
            className="simpletext"
            style={{ color: "white", textAlign: "center" }}
          >
            Drop another file  or{" "}
            <span id="browse-button" onClick={handleClick}>
              browse
            </span>
          </p>
              </>
              
            ) : (
              <p>Uploading the file</p>
            )}
          </div>
        ) : (
          <p
            className="simpletext"
            style={{ color: "white", textAlign: "center" }}
          >
            Drop your files here or{" "}
            <span id="browse-button" onClick={handleClick}>
              browse
            </span>
          </p>
        )}
      </Container>
      <ProgressBar
        percent={progressPercent}
        showProgressBar={showProgressBar}
      />
      <LinkContainer fileLink={fileLink} />
    {loading ? <Loading />: <></>}
    </div>
  );
};

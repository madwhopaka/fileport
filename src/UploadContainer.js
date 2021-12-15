import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import "./App.css";

export const UploadContainer = () => {
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
    >
      <img
        width="100px"
        height="90px"
        src="https://cdn-icons.flaticon.com/png/512/2956/premium/2956875.png?token=exp=1639486475~hmac=8da19f255989dc002b0be0e579d2535b"
        alt="filshare"
      />

      <p className= "simpletext" style = {{color:"white"}}>Drop your files here or browse</p>
    </Container>
  );
};

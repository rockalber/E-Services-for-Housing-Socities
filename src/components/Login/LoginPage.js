import React from "react";
import LoginForm from "./LoginForm";
// import Stack from "@mui/system/Stack";
import { Box, Grid, Typography } from "@mui/material";
import LoginImage from "../Assets/LoginImage.jpg";

const LoginPage = (props) => {
  return (
    <>
      <Typography variant="h2" textAlign={"center"} xs="12">
        Welcome To E-Services <br/>
      </Typography>
      <></>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} >
          <Box
            component="img"
            src={LoginImage}
            alt="Housing Socities"
            width="100%"
            height="auto"
          />
        </Grid>
        <Grid item xs={8} sm={6} container justifyContent="center" alignItems="center">
          <Box component="div" width="500" height="600" maxWidth="500px">
            <LoginForm setLogin={props.setLogin} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;

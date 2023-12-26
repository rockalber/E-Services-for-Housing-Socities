import React from "react";
import Image from "next/image";
import LoginImage from "@/Assets/LoginImage.jpg";
import LoginForm from "@/app/components/LoginForm/LoginForm";
import Stack from "@mui/system/Stack";
import { Box, Typography } from "@mui/material";

const Login = () => {
  return (
    <>
      <Typography component="h1" variant="h2" sx={{textAlign:"center"}}>
        Welcome To E-Services
      </Typography>
    <div style={{ width: "80%", display: "flex", margin: "10%" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        sx={{ width: "100%" }}
      >
        <Box flex={1} minWidth={100}>
          <Image
            src={LoginImage}
            alt="Welcome Page"
            priority={true}
            width={500}
            height={500}
            />
        </Box>
        <Box flex={1}>
          <LoginForm />
        </Box>
      </Stack>
    </div>
    </>
  );
};

export default Login;

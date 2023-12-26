"use client";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import {
  Avatar,
  Stack,
  Button,
  FormControl,
  Typography,
  FormControlLabel,
  Checkbox,
  Paper,
  Input,
  InputLabel,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";

const MainContainer = styled("main")({
  width: "100%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
});

const PaperContainer = styled(Paper)({
  marginTop: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 30px 50px 40px",
});

const FormContainer = styled("form")({
  width: "100%",
  marginTop: "8px",
});

const SubmitButton = styled(Button)({
  marginTop: "24px",
});

function SignIn() {
  return (
    <MainContainer>
      <CssBaseline />
      <PaperContainer>
        <Stack direction="row" spacing={2}>
          {/* <Avatar alt="" src={""} sx={{ width: 58, height: 56 }} /> */}
        </Stack>
        <Typography component="h1" variant="h5">
          Login your account
        </Typography>
        <FormContainer onSubmit={() => {}}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              value={""}
              type="text"
              autoComplete="email"
              autoFocus
              onChange={() => {}}
            />
          </FormControl>
          <FormControl margin="" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              value={""}
              autoComplete="current-password"
              onChange={() => {}}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<LoginIcon />}
          >
            Sign in
          </SubmitButton>
        </FormContainer>
      </PaperContainer>
    </MainContainer>
  );
}

export default SignIn;

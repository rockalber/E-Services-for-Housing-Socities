import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import {
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
import { Link } from "react-router-dom";

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

function LoginForm(props) {
  const [EmailPass, setEmailPass] = useState({
    Email: "",
    Pass: "",
  });

  const EmailHandler = (e) => {
    setEmailPass((prev) => {
      return { ...prev, Email: e.target.value };
    });
  };
  const PasswordHandler = (e) => {
    setEmailPass((prev) => {
      return { ...prev, Pass: e.target.value };
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(EmailPass);
    if (EmailPass.Email == "admin" || EmailPass.Pass == "pass") {
      props.setLogin(false)

     
    }
  };

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
        <FormContainer method="GET" onSubmit={SubmitHandler}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              value={EmailPass.Email}
              type="text"
              autoComplete="email"
              autoFocus
              onChange={EmailHandler}
            />
          </FormControl>
          <FormControl required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              value={EmailPass.Pass}
              autoComplete="current-password"
              onChange={PasswordHandler}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <br/>
          <Typography variant="p" fontFamily="Arial">Don't have account?<br/>
          Please <Link to={"/signup"}><span style={{color:"blue", textDecoration:"none"}}>Sign Up </span></Link></Typography>
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

export default LoginForm;

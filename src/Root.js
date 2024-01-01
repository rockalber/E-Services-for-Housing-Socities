import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
// import LoginPage from "./components/Login/LoginPage";

const Root = () => {
  // const [Login, setLogin] = useState(true);

  return (
    <>
     <NavBar>
          <Outlet />
        </NavBar>
      {/* {Login ? (
        <LoginPage setLogin={setLogin} />
      ) : (
        <NavBar>
          <Outlet />
        </NavBar>
      )} */}
    </>
  );
};

export default Root;

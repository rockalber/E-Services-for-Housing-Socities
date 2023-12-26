import { Box, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
import Table from "react-bootstrap/Table";

const Home = () => {
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          fontFamily: "monospace",
          fontWeight: "bold",
        }}
      >
        Welcome to E-Services for housing societies
      </Typography>
      <div className="Main">
        {/* <div className="DivLeft">
          <Typography variant="h5" component="h2">
            Welcome Dear Admin
          </Typography>
        </div> */}
        <div className="DivRight">
          <Box sx={{ textAlign: "center" }}>
            <Table striped variant="light"  responsive="sm">
              <thead>
                <tr>
                  <th>Your Role</th>
                  <th>User</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admin</td>
                  <td>admin</td>
                  <td>admin@yahoo</td>
                </tr>
              </tbody>
            </Table>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Home;

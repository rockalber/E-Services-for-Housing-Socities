import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
import Table from "react-bootstrap/Table";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from '@faker-js/faker';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

const Home = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Services Purchased",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data2 = {
    labels,
    datasets: [
      {
        label: "Orders",
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        backgroundColor: "#2c7edb",
      }
    ],
  };
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
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
            <Table striped variant="light" responsive="xs">
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
                  <td>admin@yahoo.com</td>
                </tr>
              </tbody>
            </Table>
          </Box>
        </div>
      </div>
      <Grid
        container
        direction="raw"
        justifyContent="center"
        spacing={2}
      >
        <Grid item xs={12} sm={5}>
          <Typography variant="h5" fontWeight="bold">
            Total Registered Users
          </Typography>
          <Pie options={options} data={data} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" fontWeight="bold">
            Available Serivces
          </Typography>
          <Bar options={options} data={data2} />;
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

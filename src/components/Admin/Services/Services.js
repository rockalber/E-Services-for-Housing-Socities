import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import {
  TextField,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./services.css";

const Services = () => {
  const [Services, setServices] = useState({
    name: "test",
    price: 0,
    description: "test",
  });
  const [serviceData, setServiceData] = useState([]);

  const SubmitHandler = () => {
    setServiceData((prevState) => [...prevState, Services]);
  };

  return (
    <>
      <Typography variant="h4" component="h2" sx={{ margin: "2%" }}>
        Services
      </Typography>
      <div className="Main">

        <div className="DivLeft">
          <Stack direction="column" spacing={2}>
            <Typography variant="h6">Add Service</Typography>
            <TextField
              id="outlined-basic"
              label="Service"
              variant="outlined"
              onChange={(e) =>
                setServices((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              type="number"
              onChange={(e) =>
                setServices((prevState) => ({
                  ...prevState,
                  price: e.target.value,
                }))
              }
            />
            <TextField
              id="standard-multiline-static"
              label="Description"
              multiline
              rows={4}
              variant="outlined"
              onChange={(e) =>
                setServices((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            />
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              {/* <VisuallyHiddenInput type="file" /> */}
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={SubmitHandler}
            >
              Add
            </Button>
          </Stack>
        </div>
        <div className="DivRight">
          <Typography variant="h6">Available Services</Typography>
          <Stack
            direction={{ xs: "column", sm: "column" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">Service</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Edit</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {serviceData.map((item, index) => {
                    return (
                      <TableRow
                      sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        key={index}
                      >
                        <TableCell component="th" scope="row">
                          {index}{" "}
                        </TableCell>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="center">
                          {item.price + ".Rs"}
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            color="success"
                            aria-label="edit"
                          >
                            <EditIcon/>
                          </IconButton>
                        </TableCell>
                        <TableCell align="center">
                          <IconButton aria-label="delete" color="error">
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Services;

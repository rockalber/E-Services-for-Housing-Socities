import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Home from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import NavData from "../NavData";


const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function SideBar(props) {
  const ListData = NavData();
  const Data = ListData[0];

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "16%",
            height: "100vh",
          }}
        >
          <ThemeProvider
            theme={createTheme({
              components: {
                MuiListItemButton: {
                  defaultProps: {
                    disableTouchRipple: true,
                  },
                },
              },
              palette: {
                mode: "dark",
                primary: { main: "rgb(102, 157, 246)" },
                background: { paper: "rgb(5, 30, 52)" },
              },
            })}
          >
            <Paper elevation={0} sx={{ flexGrow: 0 }}>
              <FireNav component="nav">
                {/* <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Firebash"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
                />
              </ListItemButton> */}
                <Link to="/" style={{textDecoration: 'none'}}>
                  <ListItem component="div" disablePadding>
                    <ListItemButton sx={{ height: 56 }}>
                      <ListItemIcon>
                        <Home color="primary" />
                      </ListItemIcon>

                      <ListItemText
                        primary="Main"
                        primaryTypographyProps={{
                          color: "primary",
                          fontWeight: "medium",
                          variant: "body2",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Divider />
                <Box>
                  {Data.admin.map((item, index) => {
                    return (
                      <Link to={item.Path} key={index} style={{textDecoration: 'none'}}>
                        <ListItemButton
                          key={item.label}
                          sx={{
                            py: 0,
                            minHeight: 32,
                            color: "rgba(255,255,255,.8)",
                          }}
                        >
                          <ListItemIcon sx={{ color: "inherit" }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: 16,
                              fontWeight: "medium",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    );
                  })}
                  {/* {open &&
                data.map((item) => (
                  <ListItemButton
                  key={item.label}
                  sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                  >
                  <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                  </ListItemIcon>
                  <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                  />
                  </ListItemButton>
                ))} */}
                </Box>
              </FireNav>
            </Paper>
          </ThemeProvider>
        </Box>
      </div>
      <div style={{ width: "100%" }}>{props.children}</div>
    </div>
  );
}

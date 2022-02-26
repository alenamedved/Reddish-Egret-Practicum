import { BottomNavigation, Box, Paper } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Paper
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        width: "100%",
        backgroundColor: "#212121",
        color: "white",

      }}
    >
      &copy; 2022 U#Welcome App
    </Paper>
  )
};

export default Footer;


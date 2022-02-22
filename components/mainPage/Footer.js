import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bottom: 0,
        py: 2,
        width: "100%",
        backgroundColor: "gray",
        color: "white",
        textAlign: "center",
      }}
    >
      &copy; 2022 UTab App
    </Box>
  )
};

export default Footer;

// <footer> <small>&copy; 2022 UTab App</small></footer>

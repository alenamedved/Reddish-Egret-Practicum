import { Box, Container, Grid, Typography } from "@mui/material";
import { fontWeight, height, positions } from "@mui/system";

import React from "react";
const style = {
  backgroundImage: `url('../images/backgrd.jpeg')`,
  height: "500px",
  backgroundPosition: "center",
  backgrounRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
};

export default function Description() {
  return (
    <Box sx={{ ...style, fontWeight: "medium",mt:8 }}>
      <Container >
        <Grid container>
          <Grid item>
            <Typography variant="h3" component="h5" mt={10}>
              {" "}
              Welcome to our community!{" "}
            </Typography>
          </Grid>
          <Grid item sx={{ fontSize: 25}} mt={5} >
            <Typography variant="pargaraph" font style={{'overflowWrap': 'break-word'}}>
              This app was created by immigrants to make it easier to settle
              into a New Country for newcomers. We know how hard it can be. And
              we are here to help.
        
            
              Below you will find a few helpful sections about job serching,
              housing and education.
         
              We encourage you to join our growing community. Let&apos;s stick
              together and let&apos;s grow together. If you register you will be
              able to post and share your concerns with others.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

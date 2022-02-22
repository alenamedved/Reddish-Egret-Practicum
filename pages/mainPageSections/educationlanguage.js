import React from "react";
import Link from "next/link";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

function educationlanguage() {
  return (
    <Container sx={{ backgroundColor: "#fff3e0", pb: 10, mb: 20, mt: 7 }} >
      <Box>
        <Typography variant="h4" marginTop={3}>
          Educational Resources for Immigrants, Refugees, Asylees and other New
          Americans
        </Typography>
        <Typography variant="h6" marginTop={3}>
          Welcome to the U.S. Department of Education`&apos;`s and Language`&apos;`s page
          dedicated to providing information and resources for immigrant, refugee,
          asylee students and families
        </Typography>
      </Box>
      <Grid item marginTop={3}>
        <Paper >
          <Grid container padding={3} justifyContent="space-between" xs={12}>
            <Grid item  >
              <Typography sx={{ sm: { display: "none" } }}>
                Educational Resources
              </Typography>
            </Grid>
            <Grid sx={{ xs: { display: "flex", alignItems: "center", justifyContent: "center" } }}>
              <Link href="https://www2.ed.gov/about/overview/focus/immigration-resources.html" target="_blank">
                <Button>go to website</Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item marginTop={3}>
        <Paper >
          <Grid container padding={3} justifyContent="space-between" xs={12}>
            <Grid item  >
              <Typography sx={{ sm: { display: "none" } }}>
                Immigrant Education
              </Typography>
            </Grid>
            <Grid sx={{ xs: { display: "flex", alignItems: "center", justifyContent: "center" } }}>
              <Link href="https://www.immigrant-education.ca/" target="_blank">
                <Button>go to website</Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item marginTop={3}>
        <Paper >
          <Grid container padding={3} justifyContent="space-between" xs={12}>
            <Grid item  >
              <Typography sx={{ sm: { display: "none" } }}>
                Immigrant Student Resources
              </Typography>
            </Grid>
            <Grid sx={{ xs: { display: "flex", alignItems: "center", justifyContent: "center" } }}>
              <Link href="https://www.apa.org/members/content/immigrant-students-resources" target="_blank">
                <Button>go to website</Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item marginTop={3}>
        <Paper >
          <Grid container padding={3} justifyContent="space-between" xs={12}>
            <Grid item  >
              <Typography sx={{ sm: { display: "none" } }}>
                English Language programs
              </Typography>
            </Grid>
            <Grid sx={{ xs: { display: "flex", alignItems: "center", justifyContent: "center" } }}>
              <Link href="https://www.ilctr.org/programs/" target="_blank">
                <Button>go to website</Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item marginTop={3}>
        <Paper >
          <Grid container padding={3} justifyContent="space-between" xs={12}>
            <Grid item  >
              <Typography sx={{ sm: { display: "none" } }}>
                English School in the united states
              </Typography>
            </Grid>
            <Grid sx={{ xs: { display: "flex", alignItems: "center", justifyContent: "center" } }}>
              <Link href="https://www.kaplaninternational.com/united-states" target="_blank">
                <Button>go to website</Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Container>


  );
}

export default educationlanguage;









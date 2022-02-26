import { Grid, Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    margin: "5px",
  },
  wrapper: {
    borderRadius: "5px",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
  },
}));

const Jobs = () => {
  const classes = useStyles();
  return (
    <>
      <Box p={2} mb={2} mt={10} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="subtitle1">
              {" "}
              <Link href="https://www.upwardlyglobal.org/">
                Upwardly Global
              </Link>
            </Typography>
          </Grid>
          <Grid item xs>
            <p>
              Upwardly Global&apos;s mission is to eliminate employment barriers for
              immigrant and refugee professionals, and advance the inclusion of
              their skills into the U.S. economy.
            </p>
          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="subtitle1">
              {" "}
              <Link href="https://www.linkedin.com">Linkedin</Link>
            </Typography>
          </Grid>
          <Grid item xs>
            <p>
              Connect the world&apos;s professionals to make them more
              productive and successful.
            </p>
          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="subtitle1">
              <Link href="https://www.indeed.com">Indeed</Link>
            </Typography>
          </Grid>
          <Grid item xs>
            <p>
              Job site in the world with over 250 million unique visitors every
              month. Indeed strives to put job seekers first, giving them free
              access to search for jobs, post resumes, and research companies.
              Every day, we connect millions of people to new opportunities.
            </p>
          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="subtitle1">
              <Link href="https://www.governmentjobs.com">GovermentJobs</Link>
            </Typography>
          </Grid>
          <Grid item xs className={classes.items}>
            <p>
              GovernmentJobs.com is the only government sector job board created
              from the world&apos;s for most fully integrated recruitment,
              selection and applicant tracking system called NEOGOV Insight
              designed specifically for public sector employers.
            </p>
          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="subtitle1">
              <Link href="https://www.careerbuilder.com">CareerBuilder</Link>
            </Typography>
          </Grid>
          <Grid item xs className={classes.items}>
            <p>
              At CareerBuilder, we&apos;ve been giving people the tools they
              need to find personal success for the last 20+ years from the
              hundreds of thousands of employers seeking great talent to the
              millions of jobseekers out there looking for the right
              opportunities.{" "}
            </p>
          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="subtitle1">
              <Link href="https://remoteok.com">Remote Work</Link>
            </Typography>
          </Grid>
          <Grid item xs>
            <p> Find Work At Home Opportunitie.</p>
          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="subtitle1">
              <Link href="https://bettsrecruiting.com/">Bettsrecruiting</Link>
            </Typography>
          </Grid>
          <Grid item xs>
            <p> This is a good website that you can find job easily.</p>
          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="subtitle1">
              {" "}
              <Link href="https://usahello.org/">USAHello</Link>
            </Typography>
          </Grid>
          <Grid item xs>
            <p> This is a good website that you can find job easily.</p>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Jobs;

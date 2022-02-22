import { Grid, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
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

      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'>  <Link href="https://www.linkedin.com"><a>Linkedin</a></Link></Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p>Connect the world&apos;s professionals to make them more productive and successful.</p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'><Link href="https://www.indeed.com"><a>Indeed</a></Link></Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p>Job site in the world with over 250 million unique visitors every month.
              Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes,
              and research companies. Every day, we connect millions of people to new opportunities.</p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'><Link href="https://www.governmentjobs.com"><a>GovermentJobs</a></Link></Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p>GovernmentJobs.com is the only government sector job board created from the world's for most fully integrated recruitment,
              selection and applicant tracking system called NEOGOV Insight designed specifically for public sector employers.</p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'><Link href="https://www.careerbuilder.com"><a>CareerBuilder</a></Link></Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p>At CareerBuilder, we&apos;ve been giving people the tools they need to find personal
              success for the last 20+ years from the hundreds of thousands of employers
              seeking great talent to the millions of jobseekers out there looking for the right opportunities. </p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'><Link href="https://remoteok.com"><a>Remote Work</a></Link></Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p> Find Work At Home Opportunitie.</p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'><Link href="https://bettsrecruiting.com/"><a>Bettsrecruiting</a></Link></Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p> This is a good website that you can find job easily.</p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'> <Link href="https://usahello.org/"><a>USAHello</a></Link></Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p> This is a good website that you can find job easily.</p>

          </Grid>
        </Grid>

      </Box>

    </>
  )
}
export default Jobs;
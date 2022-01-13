import { Grid, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
import JobCard from '../components/jobs/JobsCard';
import Header from '../components/mainPage/Header';
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
            <Typography variant='subtitle2'>Google</Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p> connect the world’s professionals to make them more productive and successful</p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'><Link href="https://www.indeed.com"><a>indeed</a></Link></Typography>
            <Typography variant='subtitle2'>facebook</Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p>  job site in the world1 with over 250 million unique visitors2 every month.
              Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes,
              and research companies. Every day, we connect millions of people to new opportunities.</p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'><Link href="https://www.governmentjobs.com"><a>Govermentjobs</a></Link></Typography>
            <Typography variant='subtitle2'>Google</Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p> GovernmentJobs.com is the only government sector job board created from the world's foremost fully integrated recruitment,
              selection and applicant tracking system called NEOGOV Insight designed specifically for public sector employers</p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'><Link href="https://www.careerbuilder.com"><a>CareerBuilder</a></Link></Typography>
            <Typography variant='subtitle2'>Google</Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p>At CareerBuilder, we’ve been giving people the tools they need to find personal
              success for the last 20+ years—from the hundreds of thousands of employers
              seeking great talent to the millions of jobseekers out there looking for the right opportunities. </p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'><Link href="https://www2.ed.gov"><a>education for immigrant</a></Link></Typography>
            <Typography variant='subtitle2'>Google</Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p> ED administers some 200 programs, publishes many reports annually,
              and maintains thousands of web pages.
              One major goal of ED.gov is to help you find things and accomplish whatever you came to ED.gov to do</p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'><Link href="https://remoteok.com"><a>Remote Work</a></Link></Typography>
            <Typography variant='subtitle2'>Google</Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p> Find Work At Home Opportunitie</p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'><Link href="https://www.worldtrips.com"><a>bettsrecuiting</a></Link></Typography>
            <Typography variant='subtitle2'>Google</Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p> this is a good website that you can find job easly</p>

          </Grid>
        </Grid>
      </Box>
      <Box p={2} mb={2} className={classes.wrapper}>
        <Grid container alignItems="center">
          <Grid item xs className={classes.jobs}>
            <Typography variant='subtitle1'> <Link href="https://usahello.org/"><a>USAHello</a></Link></Typography>
            <Typography variant='subtitle2'>Google</Typography>
          </Grid>
          <Grid item xs className={classes.items}>

            <p> this is a good website that you can find job easly</p>

          </Grid>
        </Grid>

      </Box>

    </>
  )
}
export default Jobs;
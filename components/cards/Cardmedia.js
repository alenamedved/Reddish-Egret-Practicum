import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";


const Cardmedia = () => {
 return (
  <Grid container spacing={3} sx={{ mt: 5, mb: 10, dispalay: "flex", alignItem: "center", justifyContent: "center" }}>
   <Grid item xs={12} md={5} lg={3} sx={{ width: "auto", m: 2 }}>
    <Link href={"/mainPageSections/jobs"} passHref>
     <Card sx={{ maxWidth: "auto", justifyContent: "center" }}  >
      <CardMedia
       component="img"
       alt="green iguana"
       height="140"
       image="./images/jobs.jpg"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Jobs and Career
       </Typography>
       <Typography variant="body2" color="text.secondary">
       This guide to jobs for new immigrants in the USA is a great place to start your search.
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Learn More</Button>
      </CardActions>
     </Card>
    </Link>
   </Grid>
   <Grid item xs={12} md={5} lg={3} sx={{ width: "auto", m: 2 }}>
    <Link href={"/mainPageSections/housingfood"} passHref>
     <Card sx={{ maxWidth: "auto", m: "auto" }}>
      <CardMedia
       component="img"
       alt="green iguana"
       height="140"
       image="./images/housing.jpg"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Housing and Food
       </Typography>
       <Typography variant="body2" color="text.secondary">
       Welcome to the United States: A Guide for New Immigrants to search for Housing and find Food.
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Learn More</Button>
      </CardActions>
     </Card>
    </Link>
   </Grid>
   <Grid item xs={12} md={5} lg={3} sx={{ width: "auto", m: 2 }}>
    <Link href={"/mainPageSections/educationlanguage"} passHref>
     <Card sx={{ maxWidth: "auto", m: "auto" }}>
      <CardMedia
       component="img"
       alt="green iguana"
       height="140"
       image="./images/education.jpg"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Education and Language
       </Typography>
       <Typography variant="body2" color="text.secondary">
       Immerse Yourself In Innovative Teaching and Learning Methods, Search Us Today.
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Learn More</Button>
      </CardActions>
     </Card>
    </Link>
   </Grid>
  </Grid>


 )
}

export default Cardmedia;



















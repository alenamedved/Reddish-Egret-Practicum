import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";


const Cardmedia = () => {
 return (
  <Grid container spacing={3} sx={{ mt: 5, dispalay: "flex", alignItem: "center", justifyContent: "center" }}>
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
       <Typography gutterBottom variant="h4" component="div">
        Jobs and Career
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
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
       <Typography gutterBottom variant="h4" component="div">
        Housing And Food
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
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
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
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



















import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

function Resources() {
  return (
    <>
      <Container >
        <Typography variant="h3" component="h1" mt={3}>
          Housing Resources for Immigrants
        </Typography>
        <Box>
          <Typography variant="paragraph" component="p" mt={3}>
            There are housing programs in the United States that can provide affordable housing for all immigrants,
            including those that are undocumented. This guide will explain what federal affordable housing programs are open to immigrants,
            provide the eligibility requirements for these programs and describe other resources that can help immigrant households find an apartments they can afford.
            Please click on the links below to find more info
          </Typography>
        </Box>
        <Grid container direction="column" spacing={1} mt={4} >
          <Grid item >
            <Paper >
              <Grid container padding={3} justifyContent="space-between" >
                <Grid item  >
                  <Typography sx={{ sm: { display: "none" } }}>
                    Affordable Housing
                  </Typography>
                </Grid>
                <Grid sx={{ xs: { display: "flex", alignItems: "center", justifyContent: "center" } }}>
                  <Link href="https://affordablehousingonline.com/guide/housing-for-immigrants" target="_blank" passHref>
                    <Button>go to website</Button>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid mt={3}>
            <Paper mt={4}>
              <Grid container padding={3} justifyContent="space-between" >
                <Grid item>
                  <Typography>
                    Affordable Housing
                  </Typography>
                </Grid>
                <Grid>
                  <Link href="https://www.hudexchange.info/housing-and-homeless-assistance/homeless-help/" target="_blank" class="blue-button external" passHref>
                    <Button>Find a Continuum of Care in Your Community</Button>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid mt={3}>
            <Paper mt={4}>
              <Grid container padding={3} justifyContent="space-between" >
                <Grid item>
                  <Typography>
                    Affordable Housing
                  </Typography>
                </Grid>
                <Grid>
                  <Link href="https://www.hud.gov/topics/rental_assistance" target="_blank" passHref>
                    <Button>HUD Rental Assistance</Button>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid mt={3}>
            <Paper mt={4}>
              <Grid container padding={3} justifyContent="space-between" >
                <Grid item>
                  <Typography>
                    Affordable Housing
                  </Typography>
                </Grid>
                <Grid>
                  <Link href="https://www.nilc.org/wp-content/uploads/2016/03/rental_housing_1005.pdf" target="_blank" passHref>
                    <Button>Rental Housing Programs</Button>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Typography variant="h5" component="h1" mt={3}> Food </Typography>
        <Grid container mt={3} >
          <Grid item xs={12} >
            <Image src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="restaurant" width="100%" height="auto" />
          </Grid>
          <Grid item mt={2} xs={12}>
            <Button variant="contained" ><Link href="https://www.nytimes.com/interactive/2021/dining/favorite-restaurant-list-america.html" target="_blank">Restaurant List</Link></Button>
          </Grid>
          <Grid item xs={12} mt={2}>
            <ImageList sx={{ width: 300, height: 325, marginLeft: 2 }}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <Image
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>by: {item.author}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
        <Box mt={2} >
          <Button variant="contained"><Link href="https://frac.org/wp-content/uploads/State-Food-Assistance-Programs.pdf" target="_blank" >State Food Assistance Programs</Link></Button>
        </Box>
      </Container>
    </>
  )
}

export default Resources;


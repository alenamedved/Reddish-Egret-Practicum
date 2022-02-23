import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import fire from "../config/fire-config";
import { storage } from "../config/fire-config";
import { CountryDropdown } from "react-country-region-selector";
import Languages from "./Languages";
import "@firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "./context/authUserContext";
import TagsInput from "./TagsHobbies";
import App from "next/app";
import firebase from "firebase";
import { ListItem, ListItemText, unstable_composeClasses } from "@mui/material";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaeseline,
  Grid,
  Modal,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CustomizedDialogs from "./dialog";
import ProfilePage from "./profilepage";

function ProfileCard({ currentUser, updateUserInfo }) {

  const { country, hobbies, language, location, userImageUrl, userName } = currentUser;

  return (
    <Grid item xs={2} columns={1} gridColumn="2" gridRow={2} mx="auto" my="10px" >
      <Card sx={{ maxWidth: 375 }}>
        <CustomizedDialogs>
          <ProfilePage
            currentUser={currentUser}
            updateUserInfo={updateUserInfo}
          />
        </CustomizedDialogs>
        <CardMedia component="img" image={userImageUrl || "https://via.placeholder.com/400x300" } alt="avatar" />
        <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography gutterBottom><strong>{userName}</strong></Typography>
          <Typography gutterBottom>Speaks <strong>{language}</strong></Typography>
          <Typography gutterBottom>Located at <strong>{location}</strong></Typography>
          <Typography gutterBottom>Originaly from <strong>{country}</strong></Typography>
          <Typography variant="subtitle2" >Interested in: </Typography>
          <List sx={{ display: "flex", fontStyle: "italic", paddingTop: "0px"}} >
            {hobbies.map((hobby, index) => {
              return <ListItemText sx={{margin: "4px"}} key={index}> {hobby} </ListItemText>;
            })}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProfileCard;

import React, { useState, useEffect } from "react";
import fire from "../config/fire-config";
import "firebase/firestore";
import { storage, db } from "../config/fire-config";
import { CountryDropdown } from "react-country-region-selector";
import Languages from "../components/Languages";
import "@firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../components/context/authUserContext";
import TagsInput from "../components/TagsHobbies";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import countries from "../utilities/countries";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Modal,
  List,
  ListItemText,
} from "@mui/material";

const SearchUsers = ({ currentUser, updateUserInfo }) => {
  const { authUser } = useAuth();
  const router = useRouter();

  const [user, setUser] = useState(currentUser);
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);
  //To choose the image file
  const handleImageChange = async (e) => {
    if (e.target.files[0]) {
      const userImage = e.target.files[0];

      const uploadTask = storage.ref(`images/${userImage.name}`).put(userImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref(`images/${userImage.name}`)
            .getDownloadURL()
            .then((url) => {
              setUser({ ...user, image: userImage.name, userImageUrl: url });
            });
        }
      );
    }
  };

  const getCountryCode = (value) => {
    let code = Object.keys(countries).find((k) => countries[k] === value);
    return code || "";
  };
  // To delete the selected image file
  function handleOnClick(e) {
    const items = [];
    fire
      .firestore()
      .collection("users")

      .where("userName", ">=", value)
      .where("userName", "<", value + "z")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let userData = doc.data();
          userData.countryFlag = `https://flagcdn.com/16x12/${getCountryCode(
            userData.country
          )}.png`;
          items.push(userData);
        });

        fire
      .firestore()
      .collection("users")
      .where('hobbies',"array-contains", value)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let userData = doc.data();
          userData.countryFlag = `https://flagcdn.com/16x12/${getCountryCode(
            userData.country
          )}.png`;
          items.push(userData);
        });

        fire
          .firestore()
          .collection("users")
          .where("country", ">=", value)
          .where("country", "<", value + "z")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let userData = doc.data();
              userData.countryFlag = `https://flagcdn.com/16x12/${getCountryCode(
                userData.country
              )}.png`;
              items.push(userData);
            });
            
            setUsers([...new Set(items)]);

            console.log(items);
          });
        });
      });
  }

  const selectedTags = (tags) => {
    let updatedUser = user;
    updatedUser.hobbies = [...tags];
    setUser(updatedUser);
  };

  return (
    <>
      <Toaster />
      <div className="container" style={{paddingTop:"50px",paddingBottom:"60px", marginLeft:"10px"}}>
        <h2>Search for users</h2>
        <h3>Want to connect with some of the users ? Who knows, you might have some things in common!<br/> Use the search box below to find users by name, country, hobby.</h3>
        <Grid container>
          <Grid item>
            <TextField
              id="standard-search"
              label="Search Users"
              type="search"
              variant="standard"
              onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handleOnClick(e);
                  }
              }}
              onChange={(e) => setValue(e.target.value)}
            />
          </Grid>

          <Grid item alignItems="stretch" style={{ display: "flex", paddingLeft:"20px",}}>
            <Button onClick={handleOnClick} color="primary" variant="outlined">
              SEARCH
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <Grid style={{marginTop:"20px"}} container spacing={2} columns={16}>
            {users.map((user, i) => {
              return (
                <Grid key={i} item xs={4}>
                <Card key={i} sx={{ maxWidth: 375 }}>
                  <CardMedia
                    component="img"
                    image={
                      user.userImageUrl || "http://via.placeholder.com/400x300"
                    }
                    alt="avatar"
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography gutterBottom>
                      <strong>{user.userName}</strong>
                    </Typography>
                    <Typography gutterBottom>
                      Speaks <strong>{user.language}</strong>
                    </Typography>
                    <Typography gutterBottom>
                      Located at <strong>{user.location}</strong>
                    </Typography>
                    <Typography gutterBottom>
                      Originaly from <strong>{user.country}</strong>{" "}
                      <img src={user.countryFlag} />
                    </Typography>
                    <Typography variant="subtitle2">Interested in: </Typography>
                    <List
                      sx={{
                        display: "flex",
                        fontStyle: "italic",
                        paddingTop: "0px",
                      }}
                    >
                      {user.hobbies.map((hobby, index) => {
                        return (
                          <ListItemText sx={{ margin: "4px" }} key={index}>
                            {" "}
                            {hobby}{" "}
                          </ListItemText>
                        );
                      })}
                    </List>
                  </CardContent>
                </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SearchUsers;

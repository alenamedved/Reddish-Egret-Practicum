import React from "react";
import { db } from "../config/fire-config";
import firebase from "firebase";
import { useAuth } from "../components/context/authUserContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/400.css";
import { Avatar } from "@mui/material";
import { RiDeleteBin2Line } from "react-icons/ri";
import { deleteDocFromCollection } from "./Post.js";

export default function Comment({ comment }) {
  const {
    userName,
    commentBody,
    createdAt,
    userImageUrl,
    commentId,
    postId,
    author,
  } = comment;

  const dateCreatedAt = new Date(createdAt.toDate());

  const { authUser } = useAuth();
//handle comment delete from firestore and update commentCount for post
  const onDeleteCommentHandle = (commentId) => {
    deleteDocFromCollection("comments", commentId);
    //create reference to the post to be updated
    const postRef = db.collection("posts").doc(postId);
    //update the comments counter for this post
    postRef.update({
      commentCount: firebase.firestore.FieldValue.increment(-1),
    });
  };

  return (
    <Card sx={{ margin: "5px" }}>
      <CardContent sx={{ display: "flex", flexWrap: "wrap" }}>
        <Avatar>
          <CardMedia
            component="img"
            height="40"
            image={
              userImageUrl ||
              "https://via.placeholder.com/150/b3d1ff/808080?text=UTabAPP"
            }
            alt="avatar"
          />
        </Avatar>
        <Typography gutterBottom variant="h5" component="div">
          {userName}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle2"
          component="span"
          sx={{ alignSelf: "center", marginLeft: "5px", flexGrow: 2 }}
        >
          posted ad {dateCreatedAt.toLocaleString()}
        </Typography>

        {authUser.uid === author && (
          <CardActions onClick={() => onDeleteCommentHandle(commentId)}>
            <RiDeleteBin2Line aria-label="delete comment button" />
          </CardActions>
        )}

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ width: "100%", marginTop: "5px" }}
        >
          {commentBody}
        </Typography>
      </CardContent>
    </Card>
  );
}

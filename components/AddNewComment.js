import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { db } from "../config/fire-config";
import firebase from "firebase";
import { useAuth } from "../components/context/authUserContext";


export default function AddNeWComment({ postId, currentUser }) {
  const [comment, setComment] = useState("");
  const { userImageUrl, userName } = currentUser;
  const { authUser } = useAuth();


  //create reference to the post to be updated
  const postRef = db.collection("posts").doc(postId);
  
  const saveComment = (postId) => {
    const time = new Date();
    try {
      db.collection("comments").doc().set({
        author: authUser.uid,
        postId: postId,
        userName: userName,
        commentBody: comment,
        createdAt: time,
        userImageUrl: userImageUrl,
      });
    } catch (error) {
      console.log(error);
    }
    //update the comments counter for this post
    postRef.update({
      commentCount: firebase.firestore.FieldValue.increment(1),
    });
    //reset the comment to empty string
    setComment("");
  };


  return (
    <Stack>
      <TextField
        id="standard-basic"
        label="Leave your comment"
        multiline
        variant="filled"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{ mb: "2px"}}
      />

      <Button
        variant="contained"
        onClick={() => saveComment(postId)}
        endIcon={<SendIcon />}
      >
        Comment
      </Button>
    </Stack>
  );
}

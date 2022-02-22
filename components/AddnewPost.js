import { TextField, Button, TextareaAutosize } from "@material-ui/core";
import React, { useState } from "react";
import { db, timestamp } from "../config/fire-config";
import { useAuth } from "../components/context/authUserContext";

const AddnewPost = ({ currentUser, handleClose }) => {
  const { authUser } = useAuth();
  const [input, setInput] = useState("");

  const addNewPost = () => {
      if(input) { //dont send empty string
          db.collection("posts").add({
            postBody: input,
            createdAt: timestamp,
            author: authUser.uid,
            commentCount: 0,
            likeCount: 0,
            userName: currentUser.userName,
            userImageUrl: currentUser.userImageUrl,
          });
          handleClose()
      }
    setInput("");
  };
  return (
    <>
      <TextareaAutosize
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "5px",
          fontWeight: 500,
        }}
        value={input}
        placeholder="what is on your mind"
        minRows={3}
        row={5}
        maxRows={10}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        style={{ position: "absolute", right: "80%", bottom: "30%" }}
        variant="text"
        onClick={addNewPost}
      >
        Submit
      </Button>
    </>
  );
};
export default AddnewPost;

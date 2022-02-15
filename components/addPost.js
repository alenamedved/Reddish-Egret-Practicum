import React, { useEffect, useState } from "react";
import { TextField, Button, Modal, Box, Typography } from "@material-ui/core";
import { db, serverTimestamp } from "../config/fire-config";
import { useAuth } from "../components/context/authUserContext";
import toast, { Toaster } from "react-hot-toast";
import { inputAdornmentClasses } from "@mui/material";
import AddnewPost from "../components/AddnewPost";
import { FullscreenExit, ViewColumn } from "@mui/icons-material";

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button style={{
        width: '50%',
        border: "1px solid black",
        padding: 8
      }}
        variant="outlined" onClick={handleOpen}>Create Post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align='center' id="modal-modal-title" variant="h6" component="h2">
            Write your Post
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <AddnewPost />
          </Typography>
          <Button style={{ position: "absolute", left: "80%", bottom: "30%" }}
            onClick={handleClose}>
            close
          </Button>
        </Box>
      </Modal>
    </div >
  );
}

export default CreatePost;


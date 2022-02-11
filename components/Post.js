import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import AddNeWComment from "./AddNewComment";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
import CommentIcon from "@mui/icons-material/Comment";

import { db } from "../config/fire-config";
import firebase from "firebase";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(360deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function commentsLabel(count) {
  if (count === 0) {
    return "no comments";
  }
  if (count > 99) {
    return "more than 99 comments";
  }
  return `${count} comments`;
}

async function fetchComments(postId) {
  return new Promise((resolve) => {
    /* db.collection("comments").onSnapshot((doc) => {
      
      let comments = [];
      doc.forEach((doc) => {
        console.log(doc)
        comments.push(doc.data());
      });

      resolve(comments);
    }); */
    db.collection("comments")
      .where("postId", "==", postId)
      .get()
      .then((querySnapshot) => {
        let comments = [];
        querySnapshot.forEach((doc) => {
          comments.push(doc.data());
        });
        resolve(comments);
      });
  });
}

const Post = ({ post, userId, currentUser }) => {
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(post.liked);

  const [comments, setComments] = useState();

  const favoriteClick = async (postId) => {
    console.log(postId);
    const fav = !favorite;
    setFavorite(fav);

    const postRef = db.collection("posts").doc(postId);
    if (favorite) {
      //if the post already liked by current users
      //find document in the db to get it id
      db.collection("likes")
        .where("postId", "==", postId)
        .get()
        .then((snap) => {
          const tobeDeleted = snap.docs[0].id;
          //delete this doc from 'likes' collection
          db.collection("likes")
            .doc(tobeDeleted)
            .delete()
            .then()
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
      //update likeCount field for the post document
      postRef.update({
        likeCount: firebase.firestore.FieldValue.increment(-1),
      });
    } else {
      //write to database collections "likes"
      db.collection("likes").add({
        postId: postId,
        userId: userId,
      });
      //update likeCount field for the post document
      postRef.update({
        likeCount: firebase.firestore.FieldValue.increment(1),
      });
    }
  };

  const handleExpandClick = (postId) => {
    setExpanded(!expanded);
    if (!expanded) {
      const unsibscribe = db.collection("comments").onSnapshot((docs) => {
        const comments = new Promise((resolve) => {
          resolve(fetchComments(postId));
        });
        comments.then((resp) => {
          setComments(resp);
        });
      });
      
    }
  };

  const dateCreatedAt = new Date(post.createdAt.toDate());

  return (
    <Grid item xs={6} md={6} sx={{ margin: "10px 0px" }} columns={1}>
      <Card>
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{
              width: 120,
              height: 120,
              display: { xs: "none", sm: "block" },
            }}
            image={post.userImage}
            alt={"users avatar"}
          />

          <CardContent sx={{ display: "block" }}>
            <Typography component="h2" variant="h5">
              {post.userName}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {/* {new Date(post.createdAt.toDate()).toDateString()} */}
              Posted at {dateCreatedAt.toLocaleString()}
            </Typography>
            <Typography variant="subtitle1" paragraph sx={{ overflow: "true" }}>
              {post.postBody}
            </Typography>
          </CardContent>
        </Box>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => favoriteClick(post.postId)}
          >
            <Badge
              badgeContent={post.likeCount}
              sx={{ fontSize: "9" }}
              color="primary"
              showZero
            >
              <FavoriteIcon sx={{ color: favorite ? "#FF3333" : null }} />
            </Badge>
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={() => handleExpandClick(post.postId)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
            <Badge badgeContent={post.commentCount} color="primary" showZero>
              <CommentIcon aria-label={commentsLabel(post.commentCount)} />
            </Badge>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {comments
              ? comments.map((comment, ind) => (
                  <Comment key={ind} comment={comment} />
                ))
              : null}
          </CardContent>
          <AddNeWComment postId={post.postId} currentUser={currentUser} />
        </Collapse>
      </Card>
    </Grid>
  );
};

/* Post.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}; */
export default Post;

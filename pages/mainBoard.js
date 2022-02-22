import React, { useEffect, useState } from "react";
import { db } from "../config/fire-config";
import { useRouter } from "next/router";
import { useAuth } from "../components/context/authUserContext";

import Post from "../components/Post";
import ProfileCard from "../components/ProfileCard";
import CreatePost from "../components/addPost";

import Grid from "@mui/material/Grid";

function postsCollection() {
  return new Promise((resolve) => {
    db.collection("posts").onSnapshot((docs) => {
      let posts = [];
      docs.forEach((doc) => {
        posts.push({ ...doc.data(), postId: doc.id });
      });
      resolve(posts);
    });
  });
}
function likesCollection(userUid) {
  return new Promise((resolve) => {
    db.collection("likes")
      .where("userId", "==", userUid)
      .get()
      .then((querySnapshot) => {
        let usersLikes = [];
        querySnapshot.forEach((doc) => {
          usersLikes.push(doc.data().postId);
        });
        resolve(usersLikes);
      });
  });
}
function userCommentsCollection(userUid) {
  return new Promise((resolve) => {
    db.collection("comments")
      .where("author", "==", userUid)
      .get()
      .then((querySnapshot) => {
        let usersComments = [];
        querySnapshot.forEach((doc) => {
          usersComments.push(doc.id);
        });
        resolve(usersComments);
      });
  });
}
async function checkForLikedPosts(userUid) {
  const posts = await postsCollection();
  const userLikes = await likesCollection(userUid);
  posts.forEach((post) => {
    if (userLikes.some((id) => id === post.postId)) {
      post.liked = true;
    } else {
      post.liked = false;
    }
  });
  return posts;
}
async function currentUserPosts(userUid) {
  const posts = await postsCollection();
  const userPosts = [];
  posts.forEach((post) => {
    if (post.author === userUid) {
      userPosts.push(post.postId);
    }
  });

  return userPosts;
}
function updateDataInDb(docs, collection, dataToUpdate) {
  docs.forEach(async (doc) => {
    let docRef = db.collection(collection).doc(doc);
    try {
      await docRef.update(dataToUpdate);
      console.log("Document successfully updated!");
    } catch (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    }
  });
}

const MainBoard = () => {
  const [posts, setPosts] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [currentUser, setCurrentUser] = useState({
    userName: "",
    country: "",
    hobbies: [],
    image: "",
    language: "",
    location: "",
    userImageUrl: "",
  });

  const { authUser, loading } = useAuth();

  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed

  useEffect(() => {
    /*     if (loading && !authUser) router.push("/"); */
    if (authUser) {
      //fetch all posts and subscribe for updates
      db.collection("posts").onSnapshot((docs) => {
        checkForLikedPosts(authUser.uid).then((response) => {
          setPosts(response);
        });
      });
      //find current user into collention "users"
      db.collection("users")
        .doc(authUser.uid)
        .get()
        .then((snapshot) => {
          const user = snapshot.data();
          if (user) {
            setCurrentUser(user);
          }
        });
    }
  }, [authUser, loading, router]);

  //callback function is being called when user updates profile
  //it updates currentUser state, and updated userImgUrl pass and userName to each users post or comment
  const updateUserInfo = (user) => {
    //check if userName of userImage Url have changed - in this case update data for comments and posts
    if (
      currentUser.userName !== user.userName ||
      currentUser.userImageUrl !== user.userImageUrl
    ) {
      const dataToSend = {
        userImageUrl: user.userImageUrl,
        userName: user.userName,
      };
      const userPosts = currentUserPosts(authUser.uid).then((data) => {
        updateDataInDb(data, "posts", dataToSend);
      });
      const userComments = userCommentsCollection(authUser.uid).then((data) => {
        updateDataInDb(data, "comments", dataToSend);
      });
    }
    setCurrentUser(user);
  };

//add functionality to filter posts by user name when click on username inside the post
  function filterPostsByName(filterPosts) {
    const filtered = posts.filter((post) => post.userName === filterPosts);
    setPosts(filtered);
  }

  console.log(filterByName)
  console.log(currentUser);
  console.log(posts);
  return (
    <>
      <CreatePost currentUser={currentUser} />
      <Grid
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        container
        sx={{ padding: "5px" }}
        columns={2}
      >
        {/* {user ? : } */}
        <ProfileCard
          currentUser={currentUser}
          updateUserInfo={updateUserInfo}
        />

        {authUser && posts ? (
          <Grid gridRow={1}>
            {posts.map((post) => (
              <Post
                key={post.postId}
                post={post}
                userId={authUser.uid}
                currentUser={currentUser}
                filterSet={(e) => filterPostsByName(e.target.children[0].previousSibling.data)}
              />
            ))}
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default MainBoard;

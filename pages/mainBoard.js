import React, { useEffect, useState } from "react";
import { db } from "../config/fire-config";
import { useAuth } from "../components/context/authUserContext";

import Post from "../components/Post";
import ProfileCard from "../components/ProfileCard";
import CreatePost from "../components/CreatePost";

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
  const [filterByName, setFilterByName] = useState({
    filter: "",
    filterIsSet: false,
  });

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

  // Listen for changes on loading and authUser
  useEffect(() => {
    if (authUser) {
      //fetch all posts and subscribe for updates
      db.collection("posts").onSnapshot((docs) => {
        checkForLikedPosts(authUser.uid).then((response) => {
          if (filterByName.filter === "") {
            setPosts(response);
          } else {
            filterPostsByName(filterByName);
          }
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
  }, [authUser, loading, filterByName]);

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
  function filterPostsByName(filterByName) {
    const filtered = posts.filter(
      (post) => post.userName === filterByName.filter
    );
    setPosts(filtered);
  }
  function setFilter(e) {
    if (!filterByName.filterIsSet) {
      setFilterByName({
        filter: e.target.children[0].previousSibling.data,
        filterIsSet: true,
      });
    } else {
      setFilterByName({
        filter: "",
        filterIsSet: false,
      });
    }
  }

  return (
    <>
      <Grid
        display="grid"
        gridTemplateColumns="2fr 1fr"
        gridTemplateRows="4rem 1fr"
        gap={2}
        container
        sx={{ padding: "20px", marginLeft: "5px", mt: 10 }}
        columns={2}
      >
        <ProfileCard
          currentUser={currentUser}
          updateUserInfo={updateUserInfo}
        />

        <CreatePost currentUser={currentUser} />

        {authUser && posts ? (
          <Grid gridRow={2}>
            {posts.map((post) => (
              <Post
                key={post.postId}
                post={post}
                userId={authUser.uid}
                currentUser={currentUser}
                setFilter={setFilter}
              />
            ))}
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default MainBoard;

// <CreatePost currentUser={currentUser} />
// <Grid
//   display="grid"
//   gridTemplateColumns="repeat(2, 1fr)"
//   container
//   sx={{ padding: "5px" }}
//   columns={2}
// >

//   <ProfileCard currentUser={currentUser} updateUserInfo={updateUserInfo} />
//   <Grid gridRow={1}>
//     {posts.map((post) => (
//       <Post
//         key={post.postId}
//         post={post}
//         userId={authUser.uid}
//         currentUser={currentUser}
//       />
//     ))}
//   </Grid>
// </Grid>

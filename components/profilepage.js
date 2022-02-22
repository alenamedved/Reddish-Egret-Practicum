import React, { useState } from "react";
import fire from "../config/fire-config";
import "firebase/firestore";
import { storage } from "../config/fire-config";
import { CountryDropdown } from "react-country-region-selector";
import Languages from "./Languages";
import "@firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "./context/authUserContext";
import TagsInput from "./TagsHobbies";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

// Popup function to redirect after updating profile
const popUp = () => {
  toast.success("Updated Successfully!");
};

export default function ProfilePage({ currentUser, updateUserInfo }) {
  const { authUser } = useAuth();

  const [user, setUser] = useState(currentUser);

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

  // To delete the selected image file
  const removeSelectedImage = () => {
    setUser({ ...user, image: "" });
    setUser({ ...user, userImageUrl: "" });
  };

  // Form submission function
  const handleProfileUpload = async () => {
    //write data to firestore db
    fire
      .firestore()
      .collection("users")
      .doc(authUser.uid)
      .set({
        userName: user.userName,
        language: user.language,
        location: user.location,
        country: user.country,
        userImageUrl: user.userImageUrl,
        hobbies: user.hobbies,
        image: user.image,
      })
      .then(() => updateUserInfo(user));

    console.log(`user data successfully added to db under ${authUser.uid}`);
    popUp();
  };

  const selectedTags = (tags) => {
    let updatedUser = user;
    updatedUser.hobbies = [...tags];
    setUser(updatedUser);
  };

  return (
    <>
      <Toaster />
      <fieldset>
        <div style={{ display: "block" }}>
          <input
            type="file"
            accept="image/*"
            name="photo"
            style={{ margin: "20px" }}
            onChange={handleImageChange}
          />

          <Image
            src={user.userImageUrl || "https://via.placeholder.com/400x300"}
            placeholder="blur"
            blurDataURL="https://via.placeholder.com/400x300"
            unoptimized={true}
            alt="avatar"
            width={400}
            height={300}
          />

          <button onClick={removeSelectedImage}>Remove This Image</button>
          <br />
        </div>
        <br />
        <div>
          <label htmlFor="userName">User name</label>&nbsp;&nbsp;
          <input
            type="text"
            id="userName"
            value={user.userName}
            onChange={(target) =>
              setUser({ ...user, userName: target.target.value })
            }
          />
        </div>
        <div>
          <label>Language:</label>&nbsp;
          <select
            value={user.language}
            onChange={(target) =>
              setUser({ ...user, language: target.target.value })
            }
          >
            {Languages.map((language, index) => (
              <option key={index}>{language.value} </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="location">Location</label>&nbsp;&nbsp;
          <input
            type="text"
            id="location"
            value={user.location}
            onChange={(target) =>
              setUser({ ...user, location: target.target.value })
            }
          />
        </div>
        <br />
        <div>
          <label>Country:</label>&nbsp;
          <CountryDropdown
            value={user.country}
            onChange={(target) => {
              console.log(target);
              setUser({ ...user, country: target });
            }}
          />
        </div>
        <br />
        <TagsInput selectedTags={selectedTags} hobbies={user.hobbies} />
        <br />
        <button type="submit" onClick={handleProfileUpload}>
          Save
        </button>
      </fieldset>
    </>
  );
}

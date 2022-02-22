import React, { useCallback, useState } from "react";
``;
import { Button } from "@material-ui/core";
import "firebase/firestore";
import fire from "../config/fire-config";
import "firebase/firestore";
import "@firebase/auth";
import { Search } from "@material-ui/icons";
import { useAuth } from "../components/context/authUserContext";

function SearchBar() {
  const [value, setValue] = useState("");
  const [onCancelSearch, setonCancelSearch] = useState("");
  const { authUser } = useAuth();

  function handleOnSubmit(e) {
    // console.log("click");
  }

  const handleCancel = useCallback(() => {
    setValue("");
    if (onCancelSearch) {
      onCancelSearch();
    }
  }, [onCancelSearch]);

  function handleOnClick(e) {
    fire
      .firestore()
      .collection("users")
      .where("userName", "==", value)
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        console.log(items);
      });
  }

  return (
    <div className="search">
      <input
        placeholder="Search..."
        value={value}
        onSubmit={handleOnSubmit}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleOnClick} variant="text">
        Search
      </Button>
      <Button onClick={handleCancel} variant="text">
        X
      </Button>
    </div>
  );
}
export default SearchBar;


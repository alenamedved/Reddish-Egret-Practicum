import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fire from "../config/fire-config";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null); //null means that user hasn't logged in
  const [loading, setLoading] = useState(true); //true means the FB fetching the data

  const router = useRouter()

  const authStateChanged = async (authState) => {
   //check if the user not logged in
    if (!authState) {
      setAuthUser(null);
      setLoading(true);
      return;
    }

    let formattedUser = formatAuthUser(authState);

    setAuthUser(formattedUser);
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email, password) =>
    fire.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (email, password) =>
    fire.auth().createUserWithEmailAndPassword(email, password);

  const signOut = () => {
    fire.auth().signOut().then(clear());
    router.push('/')
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged(authStateChanged); //Adds an observer for changes to the user's sign-in state
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}

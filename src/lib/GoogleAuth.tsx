"use client";

import Button from "@/components/Button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebaseClient";

export default function GoogleAuth() {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
    // .then((result) => {
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;
  };

  return <Button onClick={signInWithGoogle}>Google login</Button>;
}

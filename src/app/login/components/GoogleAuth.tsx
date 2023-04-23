"use client";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "@/lib/firebaseClient";
import Button from "@/components/Button";

export default function GoogleAuth() {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    const auth = getAuth(firebaseApp);
    signInWithPopup(auth, provider);
    // .then((result) => {
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;
  };

  return <Button onClick={signInWithGoogle}>Google login</Button>;
}

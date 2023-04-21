"use client";

import { firebaseApp } from "@/lib/firebaseClient";
import { useAuthContext } from "@/lib/auth";
import Link from "next/link";

export default function Firebase() {
  const [user, setUser] = useAuthContext();

  return (
    <main className="mx-auto max-w-prose">
      <h1>Firebase</h1>
      {Boolean(user) ? (
        <h2>Hey there {user?.displayName}!</h2>
      ) : (
        <h2>
          Who are you? Want to <Link href="/login">Login</Link>
        </h2>
      )}
      <p>{JSON.stringify(firebaseApp)}</p>
    </main>
  );
}

"use client";

import { useState } from "react";

import { firebaseApp } from "@/lib/firebaseClient";
import Auth from "@/lib/Auth";

export default function Firebase() {
  return (
    <main className="mx-auto max-w-prose">
      <h1>Firebase</h1>
      <Auth />
      <p>{JSON.stringify(firebaseApp)}</p>
    </main>
  );
}

"use client"

import { useState } from "react";

import firebaseApp from "@/lib/firebaseClient";

export default function Firebase() {
  return (
    <main className="max-w-prose mx-auto">
      <h1>Firebase</h1>
      <p>{JSON.stringify(firebaseApp)}</p>
    </main>
  );
}

import { firebaseApp } from "@/lib/firebaseClient";
import Login from "@/components/Login";

export default function Firebase() {
  return (
    <main className="mx-auto max-w-prose">
      <h1>Firebase</h1>
      <Login />
      <p>{JSON.stringify(firebaseApp)}</p>
    </main>
  );
}

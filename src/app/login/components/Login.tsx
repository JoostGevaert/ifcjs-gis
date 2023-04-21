import GoogleAuth from "./GoogleAuth";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <GoogleAuth />
      <div>Mail Register</div>
      <div>Mail Login</div>
    </div>
  );
}

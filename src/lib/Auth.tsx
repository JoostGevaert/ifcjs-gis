import GoogleAuth from "./GoogleAuth";

export default function Auth() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <GoogleAuth />
      <div>Mail Register</div>
      <div>Mail Login</div>
    </div>
  );
}

import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-5">
      <SignInButton>
        <button className="border px-5 py-2">
          Login
        </button>
      </SignInButton>

      <SignUpButton>
        <button className="border px-5 py-2">
          Signup
        </button>
      </SignUpButton>
    </main>
  );
}
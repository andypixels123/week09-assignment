//TODO: render a home page with user navigation or intro to the app

import Header from "@/components/Header";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <h1>Home page</h1>
      <SignedIn>
        <Link href="/profile/:[username]">Profile</Link>
        <Link href="/posts/:[user-posts]">Posts</Link>
      </SignedIn>
    </>
  );
}

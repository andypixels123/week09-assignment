// todo: select posts from db show posts, comments, likes on page

import Header from "@/components/Header";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Posts() {
  return (
    <>
      <Header />
      <Link href="/">Home</Link>
      <Link href="/profile/:[username]">Profile</Link>
      <h1>Timeline Posts</h1>
      {/* show posts here */}
      <SignedIn>
        <Link href="/posts/new-post">add a new post</Link>
      </SignedIn>
    </>
  );
}

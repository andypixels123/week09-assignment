//TODO: render users' data
//- READ user's data from the table
//- READ user's posts: render a list of user's personal posts

import Header from "@/components/Header";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server"

//Tips
//- The Clerk userId does NOT exist until the user signs up --> show sign-up and sign-in buttons first thing (e.g. your Home page can be public, the rest of routes are protected)

//Resources:
// https://clerk.com/docs/reference/nextjs/app-router/current-user
// https://clerk.com/docs/reference/nextjs/app-router/auth

export default async function ProfilePage() {
  //db queries to GET data from the tables
  // todo: current user's name
  const { firstName, lastName } = await currentUser();
  console.log(`${firstName} ${lastName}`);
  return (
    <>
      <Header />
      <Link href="/">Home</Link>
      <Link href="/posts/:[user-posts]">Posts</Link>
      <h1>User&apos;s Profile Page</h1>
      <h2>User&apos;s Info</h2>
    </>
  );
}

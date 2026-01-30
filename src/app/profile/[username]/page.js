//TODO: render users' data
//- READ user's data from the table
//- READ user's posts: render a list of user's personal posts

import Header from "@/components/Header";
import Link from "next/link";

//Tips
//- The Clerk userId does NOT exist until the user signs up --> show sign-up and sign-in buttons first thing (e.g. your Home page can be public, the rest of routes are protected)

//Resources:
// https://clerk.com/docs/reference/nextjs/app-router/current-user
// https://clerk.com/docs/reference/nextjs/app-router/auth

export default function ProfilePage() {
  //db queries to GET data from the tables
  return (
    <>
    <Header />
      <h1>User&apos;s Profile Page</h1>
      <h2>User&apos;s Info</h2>
      <h3>User&apos;s posts</h3>
      <Link href="/posts">Posts</Link>
    </>
  );
}

// todo: render a form to INSERT post data into the posts table
//- We also need to insert the userId into the posts table, make sure you have some SQL that READS the userId from the user's table OR use the auth() function from clerk to get the userId
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";

// todo: revalidate / redirect to posts page

export default function NewPost() {
  return (
    <>
      <Header />
      <SignedIn>
        <Link href="/">Home</Link>
        <Link href="/profile/:[username]">Profile</Link>
      </SignedIn>
      <h1>Create a new post!</h1>
      <form>
        <label htmlFor="post-title">post title</label>
        <input type="text" name="post-title" />
        <label htmlFor="user-post">post content</label>
        <textarea type="text" rows={5} name="user-post"></textarea>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </>
  );
}

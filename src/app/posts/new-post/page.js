// todo: render a form to INSERT post data into the posts table
//- We also need to insert the userId into the posts table, make sure you have some SQL that READS the userId from the user's table OR use the auth() function from clerk to get the userId
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default function NewPost() {

  async function handleSubmit() {
    "use server";
    // get user id from Clerk object
    const { userId } = await auth();
    console.log(userId);

    // todo: send new post to db

    // todo: check working correctly
    // revalidate
    // revalidatePath("/posts");
    // redirect
    // redirect("/posts");
  }

  return (
    <>
      <Header />
      <main>
        <SignedIn>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
          </nav>
        </SignedIn>
        <h2>Create a new post!</h2>
        <form action={handleSubmit} className="my-form">
          <label htmlFor="postTitle">Post Title</label>
          <input type="text" name="postTitle" placeholder="name your post" />
          <label htmlFor="postContent">Post Content</label>
          <textarea type="text" rows={5} name="postContent" placeholder="write your post"></textarea>
          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer />
    </>
  );
}

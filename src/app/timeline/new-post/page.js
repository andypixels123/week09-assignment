// todo: render a form to INSERT post data into the posts table
// Also insert the userId into the posts table,
// make sure you have some SQL that READS the userId from the user's table
// OR use the auth() function from clerk to get the userId
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConn";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function NewPost() {
  const { userId } = await auth();

  async function handleSubmit(formData) {
    "use server";
    const { postTitle, postContent } = Object.fromEntries(formData);

    // insert data into database
    db.query(
      `INSERT INTO social_posts(user_id, content, title) VALUES($1, $2, $3)`,
      [
        userId,
        postContent,
        postTitle
      ],
    );
    // revalidate
    revalidatePath("/new-post");
    revalidatePath(`/timeline/${userId}`);
    // redirect
    redirect(`/timeline/${userId}`);
  }

  return (
    <>
      <Header />
      <main>
        <nav>
          <Link href="/">Home</Link>
          <SignedIn>
            <Link href={`/profile/${userId}`}>Profile</Link>
          </SignedIn>
        </nav>
        <h1>Create a post!</h1>
        <SignedIn>
          <form action={handleSubmit} className="my-form">
            <label htmlFor="postTitle">Post Title</label>
            <input type="text" name="postTitle" placeholder="name your post..." />
            <label htmlFor="postContent">Post Content</label>
            <textarea type="text" rows={5} name="postContent" placeholder="write your post..."></textarea>
            <button type="submit">Submit</button>
          </form>
        </SignedIn>
      </main>
      <Footer />
    </>
  );
}

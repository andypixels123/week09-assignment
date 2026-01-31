// select posts from db show posts, comments, likes on page
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConn";

export default async function Posts() {
  // user id from Clerk
  const { userId } = await auth();
  // fetch posts data from db
  const { rows } = await db.query(
    `SELECT id, content, title FROM social_posts WHERE user_id=$1 ORDER BY id DESC`, [userId]
  );

  return (
    <>
      <Header />
      <h1>Post Stream</h1>
      <main>
        <section>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
          </nav>

          {rows.map((row) => (
            <div className="user-post" key={row.id}>
              <h3>{row.title}</h3>
              <p>{row.content}</p>
            </div>
          ))}

          <SignedIn>
            <nav>
              <Link href="/posts/new-post">create a new post</Link>
            </nav>
          </SignedIn>
        </section>
      </main>
      <Footer />
    </>
  );
}

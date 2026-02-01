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
      <main>
        <h1>Post Stream</h1>
        <section>
          <nav>
            <Link href="/" title="home page">Home</Link>
            <Link href={`/profile/${userId}`} title="profile page">Profile</Link>
          </nav>

          {rows.map((row) => (
            <article className="user-post" key={row.id}>
              <h3>{row.title}</h3>
              <p>{row.content}</p>
            </article>
          ))}

          <SignedIn>
            <nav>
              <Link href="/timeline/new-post" title="new post form">create a new post</Link>
            </nav>
          </SignedIn>
        </section>
      </main>
      <Footer />
    </>
  );
}

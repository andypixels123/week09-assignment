// select posts from db show posts, comments, likes on page
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "@/utils/dbConn";

export default async function Posts({ params }) {
  const { userId } = await params;
  const { rows } = await db.query(
    `SELECT
    social_posts.id,
    social_posts.content,
    social_posts.title,
    social_users.user_name
    FROM social_users
    JOIN social_posts ON social_users.id = social_posts.user_id
    WHERE social_users.id=$1
    ORDER BY id DESC`,
    [userId]
  );

  let pageHeading;

  if (rows.length > 0) {
    pageHeading = `${rows[0].user_name}'s Timeline`;
  } else {
    pageHeading = "No Posts!";
  }

  return (
    <>
      <Header />
      <h1>{pageHeading}</h1>
      <main>
        <section>
          <nav>
            <Link href="/">Home</Link>
            <Link href={`/profile/${userId}`}>Profile</Link>
          </nav>

          {rows.map((row) => (
            <div className="user-post" key={row.id}>
              <h3>{row.title}</h3>
              <p>{row.content}</p>
            </div>
          ))}

          <SignedIn>
            <nav>
              <Link href="/timeline/new-post">create a new post</Link>
            </nav>
          </SignedIn>
        </section>
      </main>
      <Footer />
    </>
  );
}

// profil page, render user info from db
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { db } from "@/utils/dbConn";

export default async function ProfilePage({ params }) {
  const { userId } = await params;

  // fetch profile data from db
  const profileQuery = await db.query(
    `SELECT user_name AS username, birth_year AS born, gender, hobbies FROM social_users WHERE id=$1`, [userId]
  );

  const userData = profileQuery.rows[0];

  // calculate user's age
  const userAge = (new Date().getFullYear()) - userData.born;

  return (
    <>
      <Header />
      <main>
        <h1>Profile Info</h1>
        <section>
          <SignedOut>
            <div className="sign-in">
              <SignIn />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="user-data">
              <p>Name: {userData.username}</p>
              <p>Age: {userAge}</p>
              <p>Gender: {userData.gender}</p>
              <p>Hobbies and Interests: {userData.hobbies}</p>
            </div>
          </SignedIn>
          <nav>
            <Link href="/" title="home page">Home</Link>
            <SignedIn>
              <Link href={`/timeline/${userId}`} title="your posts">Posts</Link>
            </SignedIn>
          </nav>
        </section>
      </main >
      <Footer />
    </>
  );
}

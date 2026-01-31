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
      <h1>Profile Page</h1>
      <h2>Profile Info</h2>
      <main>
        <section>
          <nav>
            <Link href="/">Home</Link>
            <SignedIn>
              <Link href={`/timeline/${userId}`}>Posts</Link>
            </SignedIn>
          </nav>
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
        </section>
        <section>
          <h2>Friends</h2>
        </section>
      </main >
      <Footer />
    </>
  );
}

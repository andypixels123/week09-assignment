// profil page, render user info from db
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server"
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { db } from "@/utils/dbConn";

//Tips
//- The Clerk userId does NOT exist until the user signs up --> show sign-up and sign-in buttons first thing (e.g. your Home page can be public, the rest of routes are protected)

//Resources:
// https://clerk.com/docs/reference/nextjs/app-router/current-user
// https://clerk.com/docs/reference/nextjs/app-router/auth

export default async function ProfilePage() {

  // user id from Clerk
  const { userId } = await auth();
  // console.log(userId);

  // fetch profile data from db
  const profileQuery = await db.query(
    `SELECT user_name AS username, birth_year AS born, gender, hobbies FROM social_users WHERE id=$1`, [userId]
  );

  const userData = profileQuery.rows[0];
  // console.log(userData);

  // calculate user's age
  const userAge = (new Date().getFullYear()) - userData.born;
  // console.log(userAge);


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
              <Link href="/posts">Posts</Link>
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
      </main >
      <Footer />
    </>
  );
}

// home page -> intro to app
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConn";
import Image from "next/image";

export default async function HomePage() {
  const { userId } = await auth();

  // fetch users from db
  const { rows } = await db.query(
    "SELECT id, user_name FROM social_users ORDER BY user_name ASC"
  );

  return (
    <>
      <Header />
      <main>
        <h1>Home</h1>
        <section>
          <SignedIn>
            <nav>
              <Link href={`/profile/${userId}`} title="your profile page">Profile</Link>
              <Link href={`/timeline/${userId}`} title="your posts">Posts</Link>
            </nav>
            <h2>Users</h2>
            <div className="user-list">
              {rows.map((row) => (
                <Link href={`/profile/${row.id}`} key={row.id} title="profile page">{row.user_name}</Link>
              ))}
            </div>
          </SignedIn>
          <div className="mf-roundel">
            <Image
              src="/myface-logo.png"
              width={400}
              height={400}
              alt="myface roundel"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// home page -> intro to app
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConn";

export default async function HomePage() {
  const { userId } = await auth();

  // fetch users from db
  const { rows } = await db.query(
    "SELECT id, user_name FROM social_users"
  );

  return (
    <>
      <Header />
      <main>
        <h1>Home page</h1>
        <section>
          <SignedIn>
            <nav>
              <Link href={`/profile/${userId}`}>Profile</Link>
              <Link href={`/timeline/${userId}`}>Posts</Link>
            </nav>

            <h2>Other Users</h2>

            {rows.map((row) => (
              <ul key={row.id}>
                <li><Link href={`/profile/${row.id}`}>{row.user_name}</Link></li>
              </ul>
            ))}

          </SignedIn>
        </section>
      </main>
      <Footer />
    </>
  );
}

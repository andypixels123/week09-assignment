// todo: select posts from db show posts, comments, likes on page

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Posts() {
  return (
    <>
      <Header />
      <h1>Timeline Posts</h1>
      <main>
        <section>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
          </nav>

          {/* show posts here */}

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

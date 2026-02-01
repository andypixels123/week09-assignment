// sign-up page with Clerk component
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

// redirects to 'create-profile' route after sign-up with environment variable redirect
export default function SignUpPage() {
  return (
    <>
      <Header />
      <h1>Sign up</h1>
      <main>
        <div className="sign-up">
          <SignUp />
        </div>
        <nav>
          <Link href="/" title="home page">Home</Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
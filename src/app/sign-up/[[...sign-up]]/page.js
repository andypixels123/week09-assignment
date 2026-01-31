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
      <main>
        <Link href="/">Home</Link>
        <div className="sign-up">
          <SignUp />
        </div>
      </main>
      <Footer />
    </>
  );
}
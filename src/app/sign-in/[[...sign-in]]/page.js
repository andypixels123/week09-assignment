// sign-in page with Clerk component
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
    return (
        <>
            <Header />
            <h1>Login</h1>
            <main>
                <div className="sign-in">
                    <SignIn />
                </div>
                <nav>
                    <Link href="/">Home</Link>
                </nav>
            </main>
            <Footer />
        </>
    );
}


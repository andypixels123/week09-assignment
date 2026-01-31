// sign-in page with Clerk component
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
    return (
        <>
            <Header />
            <main>
                <Link href="/">Home</Link>
                <div className="sign-in">
                    <SignIn />
                </div>
            </main>
            <Footer />
        </>
    );
}


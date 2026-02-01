//TODO: navigation and user auth info
//Clerk components for UI
import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton, } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
    //when the user is signed in, they see the user button; when the user is signed out, they see the login buttons
    return (
        <>
            <SignedOut>
                <nav>
                    <SignUpButton><button className="button" title="sign up">Sign Up</button></SignUpButton>
                    <SignInButton><button className="button" title="sign in">Login</button></SignInButton>
                </nav>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <div className="logo-box">
                <Link className="logo" href="/" title="home"><h4>myface</h4></Link>
            </div>
        </>
    );
}

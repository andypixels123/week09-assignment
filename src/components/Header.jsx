//TODO: navigation and user auth info
//Clerk components for UI
import {
    UserButton,
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
    //when the user is signed in, they see the user button; when the user is signed out, they see the login buttons
    return (
        <>
            <SignedOut>
                <SignUpButton><button className="button">Sign Up</button></SignUpButton>
                <SignInButton><button className="button">Login</button></SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <Link href="/">Home</Link>
        </>
    );
}

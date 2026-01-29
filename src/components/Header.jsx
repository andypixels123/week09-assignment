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
                <SignInButton className="bg-black text-white cursor-pointer px-8 py-3 m-3" />
                <SignUpButton className="bg-black text-white cursor-pointer px-8 py-3 m-3" />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <Link href="/">Home</Link>
        </>
    );
}

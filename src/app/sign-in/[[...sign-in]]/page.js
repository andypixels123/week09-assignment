// sign-in page
import Header from "@/components/Header";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <>
            <Header />
            <div className="sign-in">
                <SignIn />
            </div>
        </>
    );
}


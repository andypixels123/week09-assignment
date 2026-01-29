// todo: render a sign-up page
//- Clerk component
//- A form to collect other user data (bio, nickname, location, interests...)
//- Insert user's data into users table, so we can render it in the profile page

// this is the sign-up page
import Header from "@/components/Header";
import { SignedIn, SignUp } from "@clerk/nextjs";

//Extra: create another nested route called createProfile where the user can complete their personal info as a second step in the sign-up process
export default function SignUpPage() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <SignUp />
      </div>
      <SignedIn>
        <form>
          <input type="text" name="nickname" />
          <textarea type="text" name="bio" />
          <input type="number" name="age" />
        </form>
      </SignedIn>
    </>
  );
}
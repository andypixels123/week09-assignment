import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { SignedIn } from "@clerk/nextjs"
import { auth, currentUser } from "@clerk/nextjs/server"

export default async function CreateProfile() {

    // get user id from Clerk
    const { userId } = await auth();
    // console.log(userId);
    // get user's name from Clerk
    const { firstName, lastName } = await currentUser();
    // console.log(`${firstName} ${lastName}`);

    // todo: store data in database
    // function handleSubmit() {
    // INSERT INTO social_users ();
    // user_id, user_name, user_gender, user_age, user_hobbies
    // }

    return (
        // we are signed-in after signing-up
        <>
            <Header />
            <SignedIn>
                <form>
                    <label htmlFor="user-name">Name</label>
                    <input type="text" name="user-name" defaultValue={`${firstName} ${lastName}`} required />

                    <label htmlFor="user-gender">Gender</label>
                    <input type="text" name="user-gender" required />

                    <label htmlFor="user-age">Year of Birth</label>
                    <input type="number" name="user-age" required />

                    <label htmlFor="user-hobbies">Interests / Hobbies</label>
                    <textarea type="text" name="user-hobbies" rows="5" required />

                    <button>Submit</button>
                </form>
            </SignedIn>
            <Footer />
            {/* add redirect to profile page? redirect(); on form submission */}
        </>
    )
}


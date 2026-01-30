import Header from "@/components/Header"
import { SignedIn } from "@clerk/nextjs"

export default function CreateProfile() {
    // function handleSubmit() {

    // }

    return (
        // todo: check if we are signed in after signing up
        <>

        <Header />
            <SignedIn>
                <form>
                    <label htmlFor="user-name">Name</label>
                    <input type="text" name="user-name" required />

                    <label htmlFor="user-age">Age</label>
                    <input type="text" name="user-age" required />

                    <label htmlFor="user-gender">Gender</label>
                    <input type="text" name="user-gender" required />

                    <label htmlFor="user-hobbies">Hobbies</label>
                    <textarea type="text" name="user-hobbies" required />

                    <button>Submit</button>
                </form>
            </SignedIn>

            {/* add redirect to profile page? redirect(); on form submission */}
        </>
    )
}


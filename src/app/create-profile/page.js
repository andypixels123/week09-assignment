import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { SignedIn } from "@clerk/nextjs"
import { auth, currentUser } from "@clerk/nextjs/server"
import { db } from "@/utils/dbConn";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function CreateProfile() {

    // todo: store data in database
    async function handleSubmit(formData) {
        "use server";
        // get user id from Clerk
        const { userId } = await auth();
        // get user's name from Clerk
        const { firstName } = await currentUser();
        const { userGender, birthYear, userHobbies } = Object.fromEntries(formData);

        //insert formValues in the database
        db.query(
            `INSERT INTO social_users(id, user_name, birth_year, gender, hobbies) VALUES($1, $2, $3, $4, $5)`,
            [
                userId,
                firstName,
                birthYear,
                userGender,
                userHobbies
            ],
        );
        // revalidate
        revalidatePath(`/profile/${userId}`);
        // redirect
        redirect(`/profile/${userId}`);
    }

    return (
        // we are signed-in after signing-up
        <>
            <Header />
            <SignedIn>
                <form action={handleSubmit}>
                    {/* <label htmlFor="user-name">Name</label>
                <input type="text" name="user-name" defaultValue={`${firstName} ${lastName}`} required /> */}

                    <label htmlFor="userGender">Gender</label>
                    <input type="text" name="userGender" required />

                    <label htmlFor="birthYear">Year of Birth</label>
                    <input type="number" name="birthYear" max={(new Date().getFullYear()) - 16} required />

                    <label htmlFor="userHobbies">Interests / Hobbies</label>
                    <textarea type="text" name="userHobbies" rows="5" required />

                    <button>Submit</button>
                </form>
            </SignedIn>
            <Footer />
            {/* add redirect to profile page? redirect(); on form submission */}
        </>
    )
}


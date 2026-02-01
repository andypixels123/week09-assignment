import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFoundPage() {
    return (
        <>
            <Header />
            <main>
                <h1>You have not posted yet!</h1>
                <section>
                    <nav>
                        <Link href="/timeline/new-post" title="new post form">create a new post</Link>
                    </nav>
                </section>
            </main>
            <Footer />
        </>
    );
}

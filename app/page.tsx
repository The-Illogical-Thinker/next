import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { auth } from "@/lib/auth";
import { useRouter } from "next/router";
import { SignoutButton } from "@/components/buttons";

export default async function Home() {

    const header = await headers();

    const router = useRouter();
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        console.log(session)
        return redirect("/signin")
    }

    return <div>
        Hello there {session.user.name}
        <br />
        <SignoutButton>Click here to signout</SignoutButton>
    </div>
}
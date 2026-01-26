"use client"
import { authClient } from "../../../lib/auth-client"; //import the auth client
import { useRouter } from "next/navigation";

export default function Signin() {

    async function signin(provider: "google" | "github") {
        await authClient.signIn.social({
            provider,
            callbackURL: "/dashboard",
            errorCallbackURL: "/error",
            newUserCallbackURL: "/welcome",
            disableRedirect: false,
        });

    }

    const router = useRouter();

    return <div>
        <h1>Sign In</h1>
        Don't have an account?
        <br />
        <button onClick={() => router.push("/signup")} className="cursor-pointer mb-10 bg-white text-black rounded-xl">
            <div className="p-4">
                Sign up
            </div></button>
        <br />
        <button onClick={() => signin("google")} className="cursor-pointer mb-10 bg-white text-black rounded-xl">
            <div className="p-4">
                Sign in using Google
            </div>
        </button>
        <br />
        <button onClick={() => signin("github")} className="cursor-pointer bg-white text-black rounded-xl">
            <div className="p-4">
                Sign in using Github
            </div>
        </button>
    </div>
}
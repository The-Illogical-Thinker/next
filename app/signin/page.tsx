"use client"

import { authClient } from "../../lib/auth-client"; //import the auth client

export default function Home() {

    async function signin(provider: "google" | "github") {
        await authClient.signIn.social({
            provider,
            callbackURL: "/dashboard",
            errorCallbackURL: "/error",
            newUserCallbackURL: "/welcome",
            disableRedirect: false,
        });

    }

    return <div>
        <button onClick={() => signin("google")}>Sign in</button>
    </div>
}
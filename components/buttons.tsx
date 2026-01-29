"use client"
import { useRouter } from "next/navigation"

interface props {
    children: React.ReactNode
}

export function SignoutButton({ children }: props) {

    const router = useRouter();

    return <button onClick={() => router.push("/signout")}>{children}</button>
}
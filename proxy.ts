import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

export function proxy(req: NextRequest) {
    const session = auth.api.getSession({
        headers: req.headers
    });

    if (!session) {
        return NextResponse.redirect(new URL("/signin", req.url));
    }

    return NextResponse.next();
}
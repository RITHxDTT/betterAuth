import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
    console.log("[Middleware] Path:", request.nextUrl.pathname);
    console.log("[Middleware] Cookies:", request.cookies.getAll());

    const sessionToken = request.cookies.get("better-auth.session_token")?.value
        || request.cookies.get("better-auth-token")?.value;

    console.log("[Middleware] Session Token:", sessionToken ? "exists" : "none");

    if (!sessionToken) {
        console.log("[Middleware] No token, redirecting to /login");
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Validate session by calling better-auth API directly
    try {
        const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        const res = await fetch(`${baseURL}/api/auth/get-session`, {
            headers: {
                Cookie: `better-auth.session_token=${sessionToken}`,
            },
        });

        console.log("[Middleware] Session API response:", res.status);

        if (!res.ok) {
            console.log("[Middleware] Invalid session, redirecting to /login");
            return NextResponse.redirect(new URL("/login", request.url));
        }

        const session = await res.json();
        console.log("[Middleware] Session data:", session);

        if (!session || !session.user) {
            console.log("[Middleware] No user in session, redirecting to /login");
            return NextResponse.redirect(new URL("/login", request.url));
        }

        console.log("[Middleware] Session valid, allowing access");
        return NextResponse.next();
    } catch (error) {
        console.log("[Middleware] Error:", error);
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

// THIS is what protects your pages automatically
export const config = {
    matcher: [
        "/dashboard/:path*",
        "/dashboard",
        "/view/:path*",
        "/view"
    ],
};
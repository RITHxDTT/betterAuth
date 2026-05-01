import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const token = request.cookies.get("token")?.value;

  // call backend logout (Keycloak invalidation)
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        refreshToken: "dummy", // replace if backend requires real refresh token
      }),
    });
  } catch (e) {
    console.log("logout error ignored", e);
  }

  // clear cookie
  const res = NextResponse.json({ success: true });

  res.cookies.set("token", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0),
  });

  return res;
}
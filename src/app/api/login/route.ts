

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  const data = await res.json();

  const response = NextResponse.json(data, {
    status: res.status,
  });

  // set session cookie
  if (res.ok && data?.payload?.access_token) {
    response.cookies.set("token", data.payload.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
  }
    console.log("REQUEST BODY:", body);
  console.log("SPRING STATUS:", res.status);
  console.log("SPRING RESPONSE:", data);

  return response;
}
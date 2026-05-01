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

  
  if (res.ok && data?.payload) {
    const accessToken = data.payload.access_token;
    const refreshToken = data.payload.refresh_token;

    
    response.cookies.set("token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 5, 
    });

    
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, 
    });
  }

  return response;
}
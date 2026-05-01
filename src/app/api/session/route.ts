import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const getCookie = await cookies();
  const token = getCookie.get("token")?.value;

  if (!token) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({
    user: { token }, // later you can decode JWT or fetch user info
  });
}
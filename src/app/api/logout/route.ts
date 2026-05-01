import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore =await cookies();
  const token = cookieStore.get("token")?.value;

  try {
    if (token) {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  } catch {}

  const res = NextResponse.json({ success: true });

  // 🔥 THIS is the important part
  res.cookies.set("token", "", {
    path: "/",
    maxAge: 0,
  });

  return res;
}
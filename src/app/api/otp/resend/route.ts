import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const email = searchParams.get("email");
    const action = searchParams.get("action");

    if (!email || !action) {
      return NextResponse.json(
        { message: "Missing email or action" },
        { status: 400 }
      );
    }

    const backendRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/otp/resend?email=${encodeURIComponent(email)}&action=${action}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = await backendRes.json();

    return NextResponse.json(data, {
      status: backendRes.status,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
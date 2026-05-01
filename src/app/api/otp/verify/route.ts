import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const email = searchParams.get("email");
  const otpCode = searchParams.get("otpCode");
  const action = searchParams.get("action");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/otp/verify?email=${email}&otpCode=${otpCode}&action=${action}`,
    {
      method: "POST",
    }
  );

  const data = await res.json();

  return NextResponse.json(data, {
    status: res.status,
  });
}
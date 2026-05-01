import { betterAuth } from "better-auth"

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, 
})

export async function handleSignIn(credentials: {
  email: string;
  password: string;
}) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await res.json();

  if (!res.ok || !data?.isSuccess || !data?.payload?.access_token) {
    throw new Error(data?.message || "Login failed");
  }

  return data;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  dateOfBirth: string;
}

export async function handleRegister(data: RegisterData) {
  const res = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await res.json();

  console.log("REGISTER DEBUG:", res.status, resData);

  // 🔥 THIS IS THE KEY
  if (!res.ok) {
    throw new Error(resData?.message || "Registration failed");
  }

  if (resData?.isSuccess === false) {
    throw new Error(resData?.message || "Registration failed");
  }

  return resData;
}


export async function handleOtpVerify(email: string, otpCode: string) {
  const res = await fetch(
    `/api/otp/verify?email=${email}&otpCode=${otpCode}&action=REGISTRATION`,
    {
      method: "POST",
    }
  );

  const data = await res.json();

  if (!res.ok || data?.isSuccess === false) {
    throw new Error(data?.message || "Verification failed");
  }

  return data;
}


export async function handleResendOtp(email: string) {
  const res = await fetch(
    `/api/otp/resend?email=${email}&action=REGISTRATION`,
    {
      method: "POST",
    }
  );

  const data = await res.json();

  if (!res.ok || !data?.isSuccess) {
    throw new Error(data?.message || "Failed to resend OTP");
  }

  return data;
}
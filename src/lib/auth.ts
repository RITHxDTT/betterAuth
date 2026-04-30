import { betterAuth } from "better-auth";
import { authClient } from "./auth-client";

export const auth = betterAuth({
    emailAndPassword : {
        enabled: true,
    }
})

export default async function handleSignIn(credentials: {email: string, password: string}) {
    try {
      
        const res = await fetch("/api/proxy/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: credentials.email, 
                password: credentials.password, 
                callBackUrl: "/dashboard"
            })
        });

        const data = await res.json();

        if (!res.ok || !data.isSuccess) {
            throw new Error(data.message || "Login failed");
        }
        return data;
    } catch (error) {
        console.error("Sign in error:", error);
        throw error;
    }
}



export const handleRegister = async (userData: any) => {
    try {
        // 1. Call your EXISTING backend API to create the user
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Registration failed");
        }

        // 2. Automatically sign them in with Better Auth after successful registration
        await authClient.signUp.email({
            email: userData.email,
            password: userData.password,
            name: `${userData.firstName} ${userData.lastName}`,
            callbackURL: "/dashboard"
        });
    } catch (error: any) {
        console.error("Registration error:", error);
        throw error;
    }
};
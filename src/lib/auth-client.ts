import { createAuthClient } from "better-auth/react";

// Ensure this is NOT wrapped in a function
export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL
});
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const body = await request.json();

    try{
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            }
        );
        const data = await res.json();
        
        if(!res.ok){
            return NextResponse.json({ message: data?.message || "Registration failed" }, { status: res.status });
        }
       return NextResponse.json(data, { status: res.status });
        
        
    }
    catch(e){
        console.error("Registration error:", e);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
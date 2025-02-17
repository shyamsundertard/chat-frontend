import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL;

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "All fields are required",
                    ok: false
                 },
                { status: 400 }
            );
        }

        console.log("Checking existing email...");
        const response = await fetch(
            `${BACKEND_URL}/api/users?filters[email][$eq]=${email}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();

        if (data.length > 0) {
            return NextResponse.json(
                { message: "Email already registered", ok: false },
                { status: 400 }
            );
        }

        const resp = await fetch(
            `${BACKEND_URL}/api/auth/local/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: name, email, password })
            }
        );

        const registerData = await resp.json();

        if (!resp.ok) {
            return NextResponse.json(
                { message: registerData.error?.message || "Registration failed", ok: false },
                { status: 400 }
            );
        }

        return NextResponse.json({
            message: "Verification email sent successfully",
            ok: true,
        });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            {
                message: "Failed to send verification email",
                ok: false,
                error
            },
            { status: 500 }
        );
    }
}

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { z } from "zod";

// Define a schema for input validation
const userSchema = z.object({
    username: z.string().min(1, "Username is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters"),
    role: z.enum(["ADMIN", "USER", "DRIVER", "HOSPITAL"]).optional().default("USER"),
    image: z.string().url().optional(), // The image field is optional and should be a valid URL if provided
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password, role, image } = userSchema.parse(body);

        // Check if email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email },
        });
        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: 'Email already exists' }, { status: 409 });
        }

        // Check if username already exists
        const existingUserByUsername = await db.user.findUnique({
            where: { username: username },
        });
        if (existingUserByUsername) {
            return NextResponse.json({ user: null, message: 'This username already exists' }, { status: 409 });
        }

        // Create new user
        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role,
                image: image ?? null, // Assign image or null if not provided
            },
        });

        const { password: newUserPassword, ...rest } = newUser;

        return NextResponse.json({ user: rest, message: 'Successfully created user' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}

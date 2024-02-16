// pages/api/login.ts
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { compare } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json(
        { user: null, message: "User not found" },
        { status: 404 }
      );
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { user: null, message: "Invalid password" },
        { status: 401 }
      );
    }


    return NextResponse.json(
      { user: user, message: "Login successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during login:", error);

    // Return an error response
    return NextResponse.json(
      { user: null, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

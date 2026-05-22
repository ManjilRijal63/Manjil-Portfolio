import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {

    const body = await request.json();

    const feedback = await prisma.feedback.create({
      data: {
        name: body.name,
        message: body.message,
      },
    });

    return NextResponse.json(feedback);

  } catch (error) {

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );

  }
}
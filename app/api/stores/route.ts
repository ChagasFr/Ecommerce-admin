import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 400 });
    }

    if (!name) {
      return new NextResponse("Unauthorized", { status: 400 });
    }
  } catch (error) {
    console.log("[STORE_POST]", error);
    return new NextResponse("Interal error", { status: 500 });
  }
}

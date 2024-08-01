import { NextResponse } from "next/server";

const corsHeaders = {
  "Acess-Control-Allow-Origin": "*",
  "Acess-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Acess-Control-Allow-Headers": "*CONTENT-Type, Authorizantion",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(
  req: ReadableStreamBYOBRequest,
  { params }: { params: { storeId: string } }
) {
  const { productId } = await req.json();
}

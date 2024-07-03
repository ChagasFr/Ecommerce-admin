import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
    { params }: { params: { storeId: string }}
    try {
    const { userId } = auth();
    const body = await req.json();
    
    const { 
      name,
      price,
      colorId,
      categoryId,
      sizeId,
      images,
      isFeatured,
      isAchived

     } = body;
    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!images || !images.length) {
      return new NextResponse("images are required", {status: 400})
    }

    if (!price) {
      return new NextResponse("Price is required", { status: 400 });
    }

    if (!categoryId) {
      return new NextResponse("Category is required", { status: 400 });
    }

    if (!sizeId) {
      return new NextResponse("Size Id is required", { status: 400 });
    }

    if (!colorId) {
      return new NextResponse("Color Id is required", { status: 400 });
    }
    
    if (!params.storeId) {
        return new NextResponse("Store Id is required", { status: 400 });
    }
    
    const storeByUserId = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    })
    
    if (!storeByUserId) {
        return new NextResponse("Unauthorized", { status: 403 })
    }
    
    const product = await prismadb.product.create({
        data: {
        name,
        price,
        storeId: params.storeId
    },
    });

    return NextResponse.json(product);
} catch (error) {
    console.log("[BILLBOARDS_POST]", error);
    return new NextResponse("Interal error", { status: 500 });

}

export async function GET(req: Request) {
    { params }: { params: { storeId: string }}
  try {
    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }
    const billboards = await prismadb.billboard.findMany({
        where: {
            storeId: params.storeId
        }
    });

    return NextResponse.json(billboards);
  } catch (error) {
    console.log("[BILLBOARDS_GET]", error);
    return new NextResponse("Interal error", { status: 500 });
  }
}

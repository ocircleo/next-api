import { dbUrl } from "@/app/db/dburl";
import Products from "@/app/db/schema/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(dbUrl);
  let product = new Products(payload);
  try {
    const result = await product.save();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({error: true});
  }
}

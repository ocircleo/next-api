import { dbUrl } from "@/app/db/dburl";
import Products from "@/app/db/schema/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const text = searchParams.get("text");
  await mongoose.connect(dbUrl);
  const regx = new RegExp(text, "i");
  const result = await Products.find({ name: { $regex: regx } });
  return NextResponse.json(result);
}

import mongoose from "mongoose";
import { NextResponse } from "next/server";

import Products from "@/app/db/schema/products";
import { dbUrl } from "@/app/db/dburl";
export async function GET(request) {
  await mongoose.connect(dbUrl);
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");
  const skip = page * 12 || 0;
  const data = await Products.find().skip(Number(skip)).limit(12);
  return NextResponse.json(data || { result: "failed" }, { status: 200 });
}
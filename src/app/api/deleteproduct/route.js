import { dbUrl } from "@/app/db/dburl";
import Products from "@/app/db/schema/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  await mongoose.connect(dbUrl);
  const result = await Products.deleteOne({ _id: id });
  return NextResponse.json({ result });
}

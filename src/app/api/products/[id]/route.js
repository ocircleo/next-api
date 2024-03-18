import { dbUrl } from "@/app/db/dburl";
import Products from "@/app/db/schema/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params.id;
  console.log(id);
  await mongoose.connect(dbUrl);
  const result = await Products.findOne({ _id: id });
  return NextResponse.json(result, { status: 200 });
}

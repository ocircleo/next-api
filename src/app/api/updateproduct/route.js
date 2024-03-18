import { dbUrl } from "@/app/db/dburl";
import Products from "@/app/db/schema/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request) {
  let payload = await request.json();
  const id = payload._id;
  delete payload._id;
  await mongoose.connect(dbUrl);
  const result = await Products.findByIdAndUpdate(
    { _id: id },
    {
      $set: payload,
    },
    {
      new: true,
    }
  );

  return NextResponse.json(result);
}

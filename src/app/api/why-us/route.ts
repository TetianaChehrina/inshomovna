import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import WhyUs from "@/models/WhyUs";

export async function GET() {
  try {
    await dbConnect();
    const content = await WhyUs.findOne().lean();
    if (!content)
      return NextResponse.json({ message: "Not found" }, { status: 404 });

    return NextResponse.json(content);
  } catch (error) {
    console.error("[WHY_US_GET_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

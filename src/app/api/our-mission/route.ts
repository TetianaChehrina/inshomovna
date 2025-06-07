import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { OurMission } from "@/models/OurMission";

export async function GET() {
  try {
    await dbConnect();
    const mission = await OurMission.findOne().lean();
    if (!mission) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json(mission);
  } catch (error) {
    console.error("[OUR_MISSION_GET_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

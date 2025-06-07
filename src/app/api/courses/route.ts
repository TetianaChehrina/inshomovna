import { getCourses } from "@/lib/api/courses";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const courses = await getCourses();
    return NextResponse.json(courses);
  } catch (error) {
    console.error("COURSES_GET_ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

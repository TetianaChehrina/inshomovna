import dbConnect from "@/lib/dbConnect";
import { CourseModel } from "@/models/Course";
import { Course } from "@/types/course";

export const getCourses = async (): Promise<Course[]> => {
  await dbConnect();
  const result = await CourseModel.find({}).lean();
  return JSON.parse(JSON.stringify(result));
};

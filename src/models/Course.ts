import { Schema, models, model } from "mongoose";

const subCourseModuleSchema = new Schema({
  title: { type: String, required: true },
  price: { type: String, default: "" },
  imageUrl: { type: String, default: "" },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
});

const subCourseSchema = new Schema({
  title: { type: String, required: true },
  price: { type: String, default: "" },
  imageUrl: { type: String, default: "" },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  details: { type: [String], default: [] },
  subCoursesModules: { type: [subCourseModuleSchema], default: [] },
});

const courseSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  price: { type: String, default: "" },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  imageUrl: { type: String, required: true },
  details: { type: [String], default: [] },
  subCourses: { type: [subCourseSchema], default: [] },
});

export const CourseModel = models.Course || model("Course", courseSchema);

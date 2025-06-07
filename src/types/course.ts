export interface SubCourseModule {
  title: string;
  price: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
}

export interface SubCourse {
  title: string;
  price: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
  details: string[];
  subCoursesModules: SubCourseModule[];
}

export interface Course {
  _id?: string;
  title: string;
  slug: string;
  price: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  details: string[];
  subCourses: SubCourse[];
}

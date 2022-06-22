import { Course } from "../../components/courses/types/course";
import { CourseActionType } from "./actionTypes";
import { IAction } from "./IAction";
import * as courseApi from "../../api/courseApi";

export const createCourse = (course: Course): IAction<Course> => {
  return { type: CourseActionType.CREATE_COURSE, payload: course };
};

export const loadCoursesSuccess = (courses: Course[]): IAction<Course[]> => {
  return { type: CourseActionType.LOAD_COURSES_SUCCESS, payload: courses };
};

export const loadCourses = ()  =>  {
  return (dispatch: Function) =>
    courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
};

import { Course } from '../../components/courses/types/course';
import {CourseActionType} from "./actionTypes";
import {IAction} from "./IAction";

export const createCourse = (course: Course): IAction<Course> => {
  return { type: CourseActionType.CREATE_COURSE, payload:course };
}

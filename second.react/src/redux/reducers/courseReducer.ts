import { Course } from "../../components/courses/types/course";
import { CourseActionType } from "../actions/actionTypes";
import { IAction } from "../actions/IAction";
import { INITIAL_STATE } from "../initialState";

const AddCourse = (state: Course[], payload: Course): Course[] => {
  return [...state, payload];
};

const setCourses = (state: Course[], payload: Course[]): Course[] => {
  return payload;
};

const handlers = {
  [CourseActionType.CREATE_COURSE]: AddCourse,
  [CourseActionType.LOAD_COURSES_SUCCESS]: setCourses,
};

const courseReducer = (
  state: Course[] = INITIAL_STATE.courses,
  action: IAction<any>
): Course[] => {
  return handlers[action.type]
    ? handlers[action.type](state, action.payload)
    : state;
};

export default courseReducer;

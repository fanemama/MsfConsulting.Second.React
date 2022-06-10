import { Course } from "../../components/courses/types/course";
import {CourseActionType} from "../actions/actionTypes";
import { IAction } from "../actions/IAction";
import { AppState } from "../appState";

const AddCourse = (state: Course[], payload: Course): Course[]  => {
  return [ ...state ,payload];
}

const handlers = {
	[CourseActionType.CREATE_COURSE]: AddCourse,
};

const INITIAL_STATE =  [] as Course[];
const courseReducer = (state: Course[] =INITIAL_STATE, action: IAction<any>): Course[] => {
  return handlers[action.type]
		? handlers[action.type](state, action.payload)
		: state;
}

export default courseReducer;
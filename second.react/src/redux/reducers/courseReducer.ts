import { Course } from "../../components/courses/types/course";
import {CourseActionType} from "../actions/actionTypes";
import { IAction } from "../actions/IAction";
import { AppState } from "../appState";

const AddCourse = (state: AppState, payload: Course): AppState  => {
  if(!payload)  return state;
  return {...state, courses:[ ...state.courses ,payload]};
}

const handlers = {
	[CourseActionType.CREATE_COURSE]: AddCourse,
};


const courseReducer = (state: AppState = { courses:[] as  Course[]}, action: IAction<any>): AppState=> {
  return handlers[action.type]
		? handlers[action.type](state, action.payload)
		: state;
}

export default courseReducer;
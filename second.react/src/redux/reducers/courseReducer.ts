import { Course } from "../../types/course";
import {CourseActionType} from "../actions/actionTypes";
import { AppState } from "../store";

const courseReducer = (state :AppState =  { courses:[] as  Course[]}, action:any) => {
  switch (action.type) {
    case CourseActionType.CREATE_COURSE:
      return {...state, courses:[ ...state.courses ,...action.course]};
    default:
      return state;
  }
}

export default courseReducer;
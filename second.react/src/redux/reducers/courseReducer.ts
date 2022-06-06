import {CourseActionType} from "../actions/actionTypes";
import { Store } from "../store";

const courseReducer = (state :Store, action:any) => {
  switch (action.type) {
    case CourseActionType.CREATE_COURSE:
      return {...state, courses:[ ...state.courses ,...action.course]};
    default:
      return state;
  }
}

export default courseReducer;
import { Author } from "../../components/courses/types/author";
import { AuthorActionType} from "../actions/actionTypes";
import { IAction } from "../actions/IAction";
import { INITIAL_STATE } from "../initialState";

const setauthors = (state: Author[], payload: Author[]): Author[] => {
  return payload;
};

const handlers = {
  [AuthorActionType.LOAD_AUTHORS_SUCCESS]: setauthors,
};

const authorsReducer = (
  state: Author[] = INITIAL_STATE.authors,
  action: IAction<any>
): Author[] => {
  return handlers[action.type]
    ? handlers[action.type](state, action.payload)
    : state;
};

export default authorsReducer;

import { AuthorActionType } from "./actionTypes";
import { IAction } from "./IAction";
import * as authorApi from "../../api/authorApi";
import { Author } from "../../components/courses/types/author";

export const loadCoursesSuccess = (authors: Author[]): IAction<Author[]> => {
  return { type: AuthorActionType.LOAD_AUTHORS_SUCCESS, payload: authors };
};

export const loadAuthors = ()  =>  {
  return (dispatch: Function) =>
  authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadCoursesSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
};

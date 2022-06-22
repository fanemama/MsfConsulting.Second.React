import { Author } from "../components/courses/types/author";
import { Course } from "../components/courses/types/course";
import { AppState } from "./appState";

export const  INITIAL_STATE: AppState = { courses:[] as  Course[],  authors: [] as Author[]};
import { Author } from '../components/courses/types/author';
import { Course } from './../components/courses/types/course';

export interface AppState{
    courses: Course[];
    authors: Author[];
}
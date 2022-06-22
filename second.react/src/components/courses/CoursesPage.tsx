import React from "react";
import { Course } from "./types/course";
import { connect } from "react-redux";
import { AppState } from "../../redux/appState";
import { bindActionCreators, Dispatch } from "redux";
import { createCourse, loadCourses } from "../../redux/actions/courseAction"
import CourseList from "./CoursesList";
import { loadAuthors } from "../../redux/actions/AuthorAction";
import { Author } from "./types/author";


interface Props {
  courses: Course[];
  authors: Author[]
  actions: {
    createCourse: typeof createCourse
    loadCourses: typeof loadCourses
    loadAuthors: typeof loadAuthors
  }
}

class CoursesPage extends React.Component<Props> {

  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) actions.loadCourses();
    if (authors.length === 0) actions.loadAuthors();
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    courses: state.authors.length === 0
      ? []
      : state.courses.map(course => {
        return {
          ...course,
          authorName: state.authors.find(a => a.id === course.authorId)?.name
        }
      }),
    authors: state.authors

  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators({ createCourse, loadCourses, loadAuthors }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
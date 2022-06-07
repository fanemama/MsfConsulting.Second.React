import React from "react";
import { Course } from "./types/course";
import { connect } from "react-redux";
import { AppState } from "../../redux/appState";
import { bindActionCreators, Dispatch } from "redux";
import {createCourse} from "../../redux/actions/courseAction"


interface Props {
  courses: Course[];
  actions:{
     createCourse: typeof createCourse
  }
}

interface State {
  course: Course;
}

class CoursesPage extends React.Component<Props, State> {

  state: State = {
    course: {
      title: "toto"
    }
  };

  handleChange = (event: any) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
    // this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators({createCourse}, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";

import { StudentView } from "../views";
import { Navbar } from "./Navbar";

class StudentContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    return (
      <>
        <Navbar />
        <StudentView 
          student={this.props.student}
        />
      </>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
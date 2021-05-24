import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteStudentThunk, fetchAllStudentsThunk } from "../../store/thunks";
import { AllStudentsView } from "../views";

class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        deleteStudent={this.props.deleteStudent}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (student) => dispatch(deleteStudentThunk(student)) 
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);
import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, deleteCampusThunk } from "../../store/thunks";
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }

  handleClick = async (id) => {
    console.log(id);
    // let url = window.location.href;
    // url = url.substring(0, url.lastIndexOf("/"));
    // let newStudent = await this.props.addStudentThunk(student);
    // window.location.href = url + "/student/" + newStudent.id;
    // console.log(this.state.firstName, this.state.lastName);
};

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampusThunk: (campus) => dispatch(deleteCampusThunk(campus)),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);
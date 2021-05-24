import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCampusThunk, fetchCampusThunk } from "../../store/thunks";

import { CampusView } from "../views";
import { Navbar } from "./Navbar";

class CampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return (
      <>
        <Navbar />
        <CampusView 
          campus={this.props.campus}
          deleteCampus={this.props.deleteCampus}
        />
      </>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteCampus: (campus) => dispatch(deleteCampusThunk(campus)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
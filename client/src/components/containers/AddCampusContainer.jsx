import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, addCampusThunk } from "../../store/thunks";
import { AddCampusView } from "../views";

class AddCampusesContainer extends Component {
    constructor() {
        super();
        this.state = {
            campusName: "",
            campusAddress: "",
            errors: {},
            hasSubmitted: false,
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ hasSubmitted: true });
        const newErrors = this.findFormErrors();
        if (Object.keys(newErrors).length > 0) {
          // We got errors!
          this.setErrors(newErrors);
        }
        else {
          // No errors! Put any logic here for the form submission!
          const campus = {
              name: this.state.campusName,
              address: this.state.campusAddress,
          };
          let url = window.location.href;
          url = url.substring(0, url.lastIndexOf("/"));
          let newCampus = await this.props.addCampusThunk(campus);
          window.location.href = url + "/campus/" + newCampus.id;
        }
    };

    setCampusName = (newCampusName) => {
        this.setState({ campusName: newCampusName }, this.findErrorOnChange);
    };

    setCampusAddress = (newCampusAddress) => {
      this.setState({ campusAddress: newCampusAddress }, this.findErrorOnChange);
    };

    findErrorOnChange = () => {
      if (this.state.hasSubmitted) {
        const newErrors = this.findFormErrors();
        this.setErrors(newErrors);
      }
    }

    setErrors = (newErrors) => {
      this.setState({ errors: newErrors });
    };

    // finds form errors
    findFormErrors = () => {
      const { campusName, campusAddress } = this.state;
      const newErrors = {};
      // campusName errors
      if (!campusName) newErrors.campusName = "cannot be blank!";
      // campusAddress errors
      if (!campusAddress) newErrors.campusAddress = "cannot be blank!";

      return newErrors;
    };

    render() {
        return (
            <AddCampusView
                handleSubmit={this.handleSubmit}
                campusName={this.state.campusName}
                setCampusName={this.setCampusName}
                campusAddress={this.state.campusAddress}
                setCampusAddress={this.setCampusAddress}
                errors={this.state.errors}
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
        addCampusThunk: (campus) => dispatch(addCampusThunk(campus)),
    };
};

// Type check props;
AddCampusesContainer.propTypes = {
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddCampusesContainer);

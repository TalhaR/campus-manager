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
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const campus = {
            name: this.state.campusName,
            address: this.state.campusAddress,
        };
        let url = window.location.href;
        url = url.substring(0, url.lastIndexOf("/"));
        let newCampus = await this.props.addCampusThunk(campus);
        window.location.href = url + "/campus/" + newCampus.id;
    };

    setCampusName = (newCampusName) => {
        this.setState({ campusName: newCampusName });
    };

    setCampusAddress = (newCampusAddress) => {
      this.setState({ campusAddress: newCampusAddress });
    };

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <AddCampusView
                handleSubmit={this.handleSubmit}
                campusName={this.state.campusName}
                setCampusName={this.setCampusName}
                campusAddress={this.state.campusAddress}
                setCampusAddress={this.setCampusAddress}
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

import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";
import { fetchCampusThunk } from "../../store/thunks";

class EditCampusContainer extends Component {
        /* 
    componentDidMount() {
        //getting campus ID from url
        this.props.fetchCampus(this.props.match.params.id);
      }
      */
    
    constructor() {
        super();
        this.state = {
            name: "",
            location: "",
            url: "",
            description: ""
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const campus = {
            name: this.state.name,
            location: this.state.location,
            url: this.state.url,
            description: this.state.description
        };
        console.log(campus);
        let web = window.location.href;
        web = web.substring(0, web.lastIndexOf("/"));
        let newCampus = await this.props.editCampusThunk(campus);
        console.log("Here is New Student***")
        window.location.href = web + "/campus";
    };

    setName = (newName) => {
        this.setState({ firstName: newName });
    };

    setLocation = (newLocation) => {
        this.setState({ lastName: newLocation });
    };

    setURL = (newURL) => {
        this.setState({ url: newURL});
    };

    setDescription = (newDescription) => {
        this.setState({ gpa: newDescription});
    };



    render() {
        return (
            <EditCampusView
                name={this.state.name}
                location={this.state.location}
                url={this.state.url}
                descripition={this.state.description}
                handleSubmit={this.handleSubmit}
                setName={this.setName}
                setLocation={this.setLocation}
                setURL={this.setURL}
                setDescription={this.setDescription}
                campus = {this.props.fetchCampus(this.props.match.params.id)}
            />
        );
    }
}

// Map state to props;
const mapState = (state) => {
    return {};
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
    return {
        editCampusThunk: (student) => dispatch(editCampusThunk(student)),
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    };
};

// Type check props;
EditCampusContainer.propTypes = {
    editCampusThunk: PropTypes.func.isRequired,
};


export default connect(mapState, mapDispatch)(EditCampusContainer);
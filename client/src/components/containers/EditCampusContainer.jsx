import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";
import { fetchCampusThunk } from "../../store/thunks";

class EditCampusContainer extends Component {
    componentDidMount() {
        //getting campus ID from imageUrl
        this.props.fetchCampus(this.props.match.params.id);
    }
    
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            imageUrl: "",
            description: ""
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const campus = {
            id: this.props.match.params.id,
            name: this.state.name,
            address: this.state.address,
            description: this.state.description
        };
        if (this.state.imageUrl !== "") { 
            campus.imageUrl = this.state.imageUrl;
        }
        console.log(campus);
        let web = window.location.href;
        web = web.substring(0, web.indexOf("/"));
        let newCampus = await this.props.editCampusThunk(campus);
        window.location.href = web + "/campus/" + this.props.match.params.id;
    };

    setName = (newName) => {
        this.setState({ name: newName });
    };

    setAddress = (newAddress) => {
        this.setState({ address: newAddress });
    };

    setImageUrl = (newImageUrl) => {
        this.setState({ imageUrl: newImageUrl});
    };

    setDescription = (newDescription) => {
        this.setState({ description: newDescription});
    };

    render() {
        return (
            <EditCampusView
                name={this.state.name}
                address={this.state.address}
                imageUrl={this.state.imageUrl}
                descripition={this.state.description}
                handleSubmit={this.handleSubmit}
                setName={this.setName}
                setAddress={this.setAddress}
                setImageUrl={this.setImageUrl}
                setDescription={this.setDescription}
                //campus = {this.props.fetchCampus(this.props.match.params.id)}
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
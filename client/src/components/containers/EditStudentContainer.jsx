import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editStudentThunk } from "../../store/thunks";
import { EditStudentView } from "../views";



class EditStudentContainer extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            gpa: "",
            url: "",
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const student = {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            gpa: this.state.gpa,
            url: this.state.url
        };
        console.log(student);
        let web = window.location.href;
        web = web.substring(0, web.lastIndexOf("/"));
        let newStudent = await this.props.editStudentThunk(student);
        console.log("Here is New Student***")
        console.log(newStudent);
        window.location.href = web + "/students";
    };

    setFirstName = (newFirstName) => {
        this.setState({ firstName: newFirstName });
    };

    setLastName = (newLastName) => {
        this.setState({ lastName: newLastName });
    };

    setGPA = (newGPA) => {
        this.setState({ gpa: newGPA});
    };

    setURL = (newURL) => {
        this.setState({ url: newURL});
    };

    render() {
        return (
            <EditStudentView
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                gpa={this.state.gpa}
                url={this.state.url}
                handleSubmit={this.handleSubmit}
                setFirstName={this.setFirstName}
                setLastName={this.setLastName}
                setGPA={this.setGPA}
                setURL={this.setURL}
                
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
        editStudentThunk: (student) => dispatch(editStudentThunk(student)),
    };
};

// Type check props;
EditStudentContainer.propTypes = {
    editStudentThunk: PropTypes.func.isRequired,
};


export default connect(mapState, mapDispatch)(EditStudentContainer);
import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStudentThunk } from "../../store/thunks";
import { AddStudentView } from "../views";

class AddStudentContainer extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const student = {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: "noemail@gmail.com",
            campus: { name: "Hunter College" },
        };
        console.log(student);
        let url = window.location.href;
        url = url.substring(0, url.lastIndexOf("/"));
        let newStudent = await this.props.addStudentThunk(student);
        window.location.href = url + "/student/" + newStudent.id;
        console.log(this.state.firstName, this.state.lastName);
    };

    setFirstName = (newFirstName) => {
        this.setState({ firstName: newFirstName });
    };

    setLastName = (newLastName) => {
        this.setState({ lastName: newLastName });
    };

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <AddStudentView
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                handleSubmit={this.handleSubmit}
                setFirstName={this.setFirstName}
                setLastName={this.setLastName}
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
        addStudentThunk: (student) => dispatch(addStudentThunk(student)),
    };
};

// Type check props;
AddStudentContainer.propTypes = {
    addStudentThunk: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddStudentContainer);

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
            email: "",
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const student = {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email,
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

    setEmail = (newEmail) => {
        this.setState({ email: newEmail });
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
                handleSubmit={this.handleSubmit}
                firstName={this.state.firstName}
                setFirstName={this.setFirstName}
                lastName={this.state.lastName}
                setLastName={this.setLastName}
                email={this.state.email}
                setEmail={this.setEmail}
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

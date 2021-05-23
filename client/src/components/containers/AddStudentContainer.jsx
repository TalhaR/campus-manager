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
          const student = {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email,
          };
          let url = window.location.href;
          url = url.substring(0, url.lastIndexOf("/"));
          let newStudent = await this.props.addStudentThunk(student);
          window.location.href = url + "/student/" + newStudent.id;
        }
    };

    setFirstName = (newFirstName) => {
        this.setState({ firstName: newFirstName }, this.findErrorOnChange);
    };

    setLastName = (newLastName) => {
      this.setState({ lastName: newLastName }, this.findErrorOnChange);
    };

    setEmail = (newEmail) => {
        this.setState({ email: newEmail }, this.findErrorOnChange)
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

    validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    // finds form errors
    findFormErrors = () => {
      const { firstName, lastName, email } = this.state;
      const newErrors = {};
      // first name errors
      if (!firstName) newErrors.firstName = "cannot be blank!";
      // last name errors
      if (!lastName) newErrors.lastName = "cannot be blank!";
      // email errors
      if (!email) {
        newErrors.email = "cannot be blank!";
      }
      else {
        if (!this.validateEmail(email)) newErrors.email = "not a valid email!";
      }

      return newErrors;
    };

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
                errors={this.state.errors}
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

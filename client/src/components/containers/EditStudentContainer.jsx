import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editStudentThunk } from "../../store/thunks";
import { EditStudentView } from "../views";
import { fetchStudentThunk } from "../../store/thunks";


class EditStudentContainer extends Component {

    componentDidMount() {
        //getting campus ID from imageUrl
        this.props.fetchStudent(this.props.match.params.id);
    };

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            gpa: "",
            imageUrl: "",
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
          const student = {
              id: this.props.match.params.id,
              firstname: this.state.firstName,
              lastname: this.state.lastName,
              gpa: this.state.gpa,
              
          };
          if (this.state.imageUrl !== "") { 
              student.imageUrl = this.state.imageUrl;
          }
          console.log(student);
          let web = window.location.href;
          web = web.substring(0, web.indexOf("/"));
          let newStudent = await this.props.editStudentThunk(student);
          console.log("Here is New Student***")
          console.log(newStudent);
          window.location.href = web + "/student/" + this.props.match.params.id;
        }
        
    };

    setFirstName = (newFirstName) => {
        this.setState({ firstName: newFirstName }, this.findErrorOnChange);
    };

    setLastName = (newLastName) => {
        this.setState({ lastName: newLastName }, this.findErrorOnChange);
    };

    setGPA = (newGPA) => {
        this.setState({ gpa: newGPA}, this.findErrorOnChange);
    };

    setimageUrl = (newimageUrl) => {
        this.setState({ imageUrl: newimageUrl}, this.findErrorOnChange);
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

    //SOURCE: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
    validURL = (str) => {
      let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
    }

    validGPA = (str) => {
      console.log(parseFloat(str));
      //checking that there are only numbers and up to one .
      let numDots = 0;
      for (let i = 0; i < str.le; i++) {
        if (str.charAt(i) >= '0' && str.charAt(i) <= '9') {

        }
        else if (str.charAt(i) >= '.') {
          if (numDots >= 1) { //has two dots
            return false;
          }
          else {
            numDots++;
          }
        }
        else { //has non numbers
            return false;
        }
      }
      if (parseFloat(str) >= 0 && parseFloat(str) <= 4) {
          return true;
      }
      return false;
    }

    // finds form errors
    findFormErrors = () => {
      const { firstName, lastName, gpa, imageUrl } = this.state;
      const newErrors = {};
      // first name errors
      if (!firstName) newErrors.firstName = "cannot be blank!";
      // last name errors
      if (!lastName) newErrors.lastName = "cannot be blank!";
      // gpa errors
      if (!gpa) newErrors.gpa = "cannot be blank!";
      else {
        if (!this.validGPA(gpa)) newErrors.gpa = "not a valid GPA!";
      }
      // image url errors
      if (!imageUrl) newErrors.imageUrl = "cannot be blank!";
      else {
        if (!this.validURL(imageUrl)) newErrors.imageUrl = "must be a valid url!";
      }
      return newErrors;
    };

    render() {
        return (
            <EditStudentView
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                gpa={this.state.gpa}
                imageUrl={this.state.imageUrl}
                handleSubmit={this.handleSubmit}
                setFirstName={this.setFirstName}
                setLastName={this.setLastName}
                setGPA={this.setGPA}
                setimageUrl={this.setimageUrl}
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
        editStudentThunk: (student) => dispatch(editStudentThunk(student)),
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    };
};

// Type check props;
EditStudentContainer.propTypes = {
    editStudentThunk: PropTypes.func.isRequired,
};


export default connect(mapState, mapDispatch)(EditStudentContainer);
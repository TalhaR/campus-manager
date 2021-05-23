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
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
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

    setimageUrl = (newimageUrl) => {
        this.setState({ imageUrl: newimageUrl});
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
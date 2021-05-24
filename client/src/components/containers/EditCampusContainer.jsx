import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";
import { fetchCampusThunk } from "../../store/thunks";
import { fetchAllStudentsThunk } from "../../store/thunks";
import { editStudentThunk } from "../../store/thunks";

class EditCampusContainer extends Component {
    componentDidMount() {
        //getting campus ID from imageUrl
        this.props.fetchCampus(this.props.match.params.id);
        this.props.fetchAllStudents();
        
    }

    componentDidUpdate() { 
        console.log(this.props);
        
    }
    
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            imageUrl: "",
            description: "",
            errors: {},
            hasSubmitted: false,
        };
        
    }

    handleAddSubmit = async (e) => {
        e.preventDefault();

        // this.setState({ hasSubmitted: true });

        const student = {
            campus: this.props.match.params.id,
        }
        await this.props.editStudentThunk(student);

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
            await this.props.editCampusThunk(campus);
            window.location.href = web + "/campus/" + this.props.match.params.id;
        }
    };

    setName = (newName) => {
        this.setState({ name: newName }, this.findErrorOnChange);
    };

    setAddress = (newAddress) => {
        this.setState({ address: newAddress }, this.findErrorOnChange);
    };

    setImageUrl = (newImageUrl) => {
        this.setState({ imageUrl: newImageUrl}, this.findErrorOnChange);
    };

    setDescription = (newDescription) => {
        this.setState({ description: newDescription}, this.findErrorOnChange);
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

    // finds form errors
    findFormErrors = () => {
      const { name, address, imageUrl, description } = this.state;
      const newErrors = {};
      // name errors
      if (!name) newErrors.name = "cannot be blank!";
      // address errors
      if (!address) newErrors.address = "cannot be blank!";
      // image url errors
      if (!imageUrl) newErrors.imageUrl = "cannot be blank!";
      else {
        if (!this.validURL(imageUrl)) newErrors.imageUrl = "must be a valid url!";
      }
      // description errors
      if (!description) newErrors.description = "cannot be blank!";
      return newErrors;
    };

    render() {
        return (
            <EditCampusView
                name={this.state.name}
                address={this.state.address}
                imageUrl={this.state.imageUrl}
                description={this.state.description}
                handleSubmit={this.handleSubmit}
                setName={this.setName}
                setAddress={this.setAddress}
                setImageUrl={this.setImageUrl}
                setDescription={this.setDescription}
                campus={this.props.campus}
                students={this.props.students}
                errors={this.state.errors}
                handleAddSubmit={this.handleAddSubmit}
            />
        );
    }
}

// Map state to props;
const mapState = (state) => {
    return {
        campus: state.campus,
        students: state.allStudents,
    };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
    return {
        editCampusThunk: (student) => dispatch(editCampusThunk(student)),
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        editStudentThunk: (student) => dispatch(editStudentThunk(student)),
    };
};

// Type check props;
EditCampusContainer.propTypes = {
    editCampusThunk: PropTypes.func.isRequired,
};


export default connect(mapState, mapDispatch)(EditCampusContainer);
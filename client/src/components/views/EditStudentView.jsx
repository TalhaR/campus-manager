import PropTypes from "prop-types";
import { Navbar } from '../containers/Navbar'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
        },
    },
}));

const EditStudentView = (props) => {
    const classes = useStyles();
  
    return (
      <div>
        <Navbar />
        <Grid container justify="center">
          <h1>Edit Student Form</h1>
        </Grid>
    
        <form className={classes.root} noValidate autoComplete="off" onSubmit={props.handleSubmit}>
          <Grid container justify="center">
            <TextField id="standard-basic" label="First Name" value={props.firstName} onInput={ e=>props.setFirstName(e.target.value)}/>
          </Grid>
  
          <Grid container justify="center">
            <TextField id="standard-basic" label="Last Name" value={props.lastName} onInput={ e=>props.setLastName(e.target.value)}/>
          </Grid>

          <Grid container justify="center">
            <TextField id="standard-basic" label="GPA" value={props.gpa} onInput={ e=>props.setGPA(e.target.value)}/>
          </Grid>

          <Grid container justify="center">
            <TextField id="standard-basic" label="Student URL" value={props.imageUrl} onInput={ e=>props.setimageUrl(e.target.value)}/>
          </Grid>
  
          <Grid container justify="center">
            <Button type="submit" variant="contained" color="primary">
              Save Changes
            </Button>
          </Grid>
        </form>
      </div>
    )
  }

  EditStudentView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gpa: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setGPA: PropTypes.func.isRequired,
    setimageUrl: PropTypes.func.isRequired
  };

export default EditStudentView
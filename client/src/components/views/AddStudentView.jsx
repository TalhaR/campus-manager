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

const AddStudentView = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container justify="center">
        <h1>New Student Form</h1>
      </Grid>
  
      <form className={classes.root} noValidate autoComplete="off" onSubmit={props.handleSubmit}>
        <Grid container justify="center">
          {
            "firstName" in props.errors ?
            <TextField error helperText={props.errors.firstName} id="standard-basic" label="First Name" value={props.firstName} onInput={ e=>props.setFirstName(e.target.value)}/>
            :
            <TextField id="standard-basic" label="First Name" value={props.firstName} onInput={ e=>props.setFirstName(e.target.value)}/>
          }
        </Grid>

        <Grid container justify="center">
          {
            "lastName" in props.errors ?
            <TextField error helperText={props.errors.lastName} id="standard-basic" label="Last Name" value={props.lastName} onInput={ e=>props.setLastName(e.target.value)}/>
            :
            <TextField id="standard-basic" label="Last Name" value={props.lastName} onInput={ e=>props.setLastName(e.target.value)}/>
          }
        </Grid>

        <Grid container justify="center">
          {
            "email" in props.errors ?
            <TextField error helperText={props.errors.email} id="standard-basic" label="Email" value={props.email} onInput={ e=>props.setEmail(e.target.value)}/>
            :
            <TextField id="standard-basic" label="Email" value={props.email} onInput={ e=>props.setEmail(e.target.value)}/>
          }
        </Grid>

        <Grid container justify="center">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  )
}

AddStudentView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  setFirstName: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  setLastName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default AddStudentView

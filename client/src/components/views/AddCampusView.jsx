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

const AddCampusView = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container justify="center">
        <h1>New Campus Form</h1>
      </Grid>
  
      <form className={classes.root} noValidate autoComplete="off" onSubmit={props.handleSubmit}>
        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Name" value={props.campusName} onInput={ e=>props.setCampusName(e.target.value)}/>
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

AddCampusView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  campusName: PropTypes.string.isRequired,
  setCampusName: PropTypes.func.isRequired,
};

export default AddCampusView

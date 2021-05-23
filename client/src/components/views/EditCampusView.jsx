import PropTypes from "prop-types";
import { Navbar } from '../containers/Navbar'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Typography, Card, Button, Grid } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const EditCampusView = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container justify="center">
        <h1>Edit Campus Form</h1>
      </Grid>
  
      <form className={classes.root} noValidate autoComplete="off" onSubmit={props.handleSubmit}>
        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Name" value={props.name} onInput={ e=>props.setName(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Location" value={props.location} onInput={ e=>props.setLocation(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Image URL" value={props.url} onInput={ e=>props.setURL(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-multiline-flexible" label="Campus Description" multiline rowsMax={7} value={props.description} onInput={ e=>props.setDescription(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </Grid>



        <Typography variant='h4' align='left'>Students on Campus</Typography>

        <Grid container spacing={3}>
            <Grid item xs={6}>
                {props.campus.students.map(student => {
                let name = student.firstname + " " + student.lastname;
                return (
                    <Card key={student.id}>
                    <img align='center' src={student.imageUrl} alt={name} style={{width: "100%"}} />
                    <Typography variant='subtitle1' align='center'>
                        <Link to={`/student/${student.id}`}>
                        {name}
                        </Link>
                    </Typography>
                    <Typography variant='subtitle2' align='center'>
                        {props.campus.name}
                    </Typography>
                    </Card>
                );
                })}
            </Grid>
        </Grid>
      </form>
    </div>
  )
}

EditCampusView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  setURL: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default EditCampusView
